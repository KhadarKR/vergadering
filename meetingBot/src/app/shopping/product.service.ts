import { Product } from './product.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ProductService {
private productsData:Product[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<Product[]>(this.restURL);
  }

  addProduct (newProduct:Product){
return this.http.post<Product>(this.restURL,newProduct);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (product:Product){
    return this.http.put<Product>(this.restURL+"/"+product.id,product);
      }
}
