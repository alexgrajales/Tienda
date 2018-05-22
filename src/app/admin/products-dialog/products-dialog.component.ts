import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "@auth/auth.service";
import { ProductsService } from "@common/products.service";
import { SnackService } from "@common/snack.service";
import { Product } from "../../models/product";

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.css']
})
export class ProductsDialogComponent {

  constructor(
    private afs: AngularFirestore,
    public dialogRef: MatDialogRef<ProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private snackService: SnackService,
    public auth: AuthService,
    private productService: ProductsService,
  ) { 
    console.log(data);
  }

  ngOnInit() {
  }

}
