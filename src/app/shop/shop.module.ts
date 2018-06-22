import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from "@shared/shared.module";
import { SlickModule } from "ngx-slick";
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    SlickModule.forRoot(),
  ],
  declarations: [ProductsComponent, ProductComponent, CartComponent]
})
export class ShopModule { }
