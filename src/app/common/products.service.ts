import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import * as faker from "faker";
import { Product } from "../models/product";
import { promise } from 'protractor';


type productCollection = AngularFirestoreCollection<Product[]>;
type producDocument = AngularFirestoreDocument<Product>;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private afs: AngularFirestore
  ) { }

  products(): productCollection{
    return this.afs.collection<Product[]>('products');
  }

  product(id: string): producDocument{
    return this.afs.doc<Product>(`products/${id}`);
  }

  save(product: Product): Promise<any>{
    product.id = faker.random.alphaNumeric(16);
    return this.products().doc(product.id).set(Object.assign({}, product));
  }

  update(product : Product): Promise<any>{
    return this.product(product.id).update(Object.assign({}, product));
  }

  getProductImages(productId: string){
    return this.afs.doc<Product>(`products/${productId}`).collection('uploads');

  }
}
