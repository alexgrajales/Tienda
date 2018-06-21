import { Injectable } from '@angular/core';
import {AuthService} from "@auth/auth.service";
import {AngularFirestore} from "angularfire2/firestore";
import {Cart} from "../models/cart";
import {Product} from "../models/product";

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
  ) { }

  createCart(id) {
    this.afs.collection('carts').doc(id).set(
      { id: id, products: [], totalProducts: 0 }
    )
  }

  myCart(uid) {
    return this.afs.doc<Cart>(`carts/${uid}`).snapshotChanges();
  }

  myCartRef(uid) {
    return this.afs.collection<Cart>('carts').doc(uid).ref;
  }

  addProduct(product): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.user.subscribe(data => {
        if(data) {
          const ref = this.myCartRef(data.uid);
          ref.get().then(doc => {
            let cartData = doc.data();
            let productsInCart = cartData.products;
            const productToCart = {
              id: product.id,
              name: product.name,
              qty: 1,
              price: product.price
            };
            const exists = CartService.findProductByKey(productsInCart, 'id', product.id);
            if(productsInCart != null){
              if( ! exists ) {
                productsInCart.push(productToCart);
                cartData.totalProducts += 1;
              } else {
                exists.qty += 1;
                cartData.totalProducts += 1;
              }
            }
            
            return ref.update(cartData).then(() => {
              resolve(true);
            }).catch((err) => {
              reject(err);
            });
          })
        }
      })
    })
  }

  static findProductByKey(array, key, value) {
    if(array != null){
      for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
    }
    return null;
  }

  static totalProductsInCart(products: Product[]) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += parseInt(products[i]['qty']);
    }
    return sum;
  }

  totalPrice(products: Product[]): number {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += (parseInt(products[i]['qty']) * products[i]['price']);
    }
    return total;
  }  
}
