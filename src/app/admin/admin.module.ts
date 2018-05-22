// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { AdminRoutingModule } from '@admin/admin-routing.module';
// import { SharedModule } from '@shared/shared.module';
// import { AdminComponent } from '@admin/admin/admin.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     AdminRoutingModule,
//     SharedModule,
//   ],
//   declarations: [AdminComponent]
// })
// export class AdminModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from "@shared/shared.module";
import { AdminComponent } from './admin/admin.component';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [AdminComponent, ProductsDialogComponent],  
})
export class AdminModule { }
