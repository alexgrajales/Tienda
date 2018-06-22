import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "@shop/products/products.component";
import { ProductComponent } from '@shop/product/product.component';
import { CartComponent } from '@shop/cart/cart.component';


const routes: Routes = [
  { path: 'shop', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent }
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

