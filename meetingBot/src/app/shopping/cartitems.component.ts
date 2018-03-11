import { CartItem } from './cartItem.model';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
 cart:CartItem[] = [];
  constructor(private cs:CartService) { }

  ngOnInit() {
    this.cart = this.cs.getCartItems();
  }

  calculateTotal(){
    let tot = 0;
    for(let e of this.cart){
      tot += (e.price*e.quantity)
    }
    
    return tot;
  }

  delete(index:number){
    this.cs.removeCartItem(index);
  }
}
