import { CartItem } from './cartItem.model';
import { Product } from './product.model';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  constructor(private ps:ProductService,private cs:CartService) { }

  ngOnInit() {
    // this.products = this.ps.getProducts();
    this.ps.getProducts().subscribe(
      (data) => this.products = data,
      (err) => console.log("Error",err)


    );
  }

  addToCart(product:Product){
    let carts = this.cs.getCartItems();
    let flag = true;
if (carts.length>0) {
    for (var index = 0; index < carts.length; index++) {
    var f = carts[index];
    if (product.id == f.Pid ) { 
    this.cs.editCartItem(index)
    flag = false;
    break;
    }
    }
    if (flag)  {
      let item1 = new CartItem(product.id, product.name,product.price,1);
      this.cs.addCartItem(item1);
    }
} else {
      let item2 = new CartItem(product.id, product.name,product.price,1);
      this.cs.addCartItem(item2);
    }

  }
}
