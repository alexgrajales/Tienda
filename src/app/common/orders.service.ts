import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore"
import * as faker from "faker";
import { Order } from "../models/order"
import { ThrowStmt } from '@angular/compiler';

type ordersCollection = AngularFirestoreCollection<Order[]>;
type ordersDocument = AngularFirestoreDocument<Order>;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private afs: AngularFirestore
  ) { }

  orders(uid?: string)
  {
    if(uid){
      return this.afs.collection<Order[]>('orders', ref => ref.where('uid', '==', uid));
    }
    return this.afs.collection<Order[]>('orders');
  }

  order(id: string): ordersDocument{
    return this.afs.doc<Order>(`orders/${id}`)
  }

  save(order: Order): Promise<any>{
    const id = faker.random.alphaNumeric(order.id);
    order.id = id;
    return this.orders().doc(id).set(Object.assign({}, order));
  }
}
