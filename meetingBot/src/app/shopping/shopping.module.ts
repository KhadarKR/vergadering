import { LoginGuard } from './../login/login.guard';
import { CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { ListComponent } from './list.component';
import { ManageComponent } from './manage.component';
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  imports: [
    CommonModule, FormsModule, TableModule, HttpClientModule , RouterModule.forChild([
      {path: "list", component:ListComponent},
      {path : "manage", component:ManageComponent, canActivate:[LoginGuard]}
    ])
  ],
  declarations: [ProductsComponent, CartitemsComponent, ListComponent, ManageComponent],
  providers:[ProductService,CartService]

})
export class ShoppingModule { }
