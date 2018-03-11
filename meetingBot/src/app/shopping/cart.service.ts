import { CartItem } from './cartItem.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  private cartitem:CartItem[] = [];

  constructor() { }
//Retrieving Cart items
getCartItems(){
 return this.cartitem;
}
// Add an item to cart
addCartItem(newitem:CartItem){
this.cartitem.push(newitem);
}
//Remove an Item from the cart
removeCartItem (idx:number){
  this.cartitem.splice(idx,1);
}

editCartItem(index:number){
this.cartitem[index].quantity = this.cartitem[index].quantity+1; 
}

}
