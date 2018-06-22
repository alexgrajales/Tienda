import { Product } from "./product";

export class Order {
    id: string;
    uid:string;
    produts: Product[] = [];
    totalProducts: number=0;
    amount: number;
    createadat: Date;
    constructor(){
        
    }
}

