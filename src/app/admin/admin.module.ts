import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from "@shared/shared.module";
import { AdminComponent } from './admin/admin.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ProductsComponent } from './products/products.component';
import { UploadService } from '@admin/upload.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [AdminComponent, ProductsDialogComponent, ProductsComponent],  
  entryComponents: [ProductsDialogComponent],
  providers: [UploadService]
})
export class AdminModule { }
