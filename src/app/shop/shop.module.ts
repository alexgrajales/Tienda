import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from "@shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
  declarations: [ProductsComponent]
})
export class ShopModule { }
