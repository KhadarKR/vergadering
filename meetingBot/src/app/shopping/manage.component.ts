import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  products:Product[] = [];
  frmProduct:Product = new Product(null,null,null,null);
  constructor(private ps:ProductService) { }

  ngOnInit() {
    // this.products = this.ps.getProducts();
    this.ps.getProducts().subscribe(
      (data) => this.products = data,
      (err) => console.log("Error",err)


    );
  }


  add(){
    this.ps.addProduct(this.frmProduct).subscribe(
      (data) =>{
        console.log("Add Sucessful")
       this.products.push(data);
       this.frmProduct = new Product(null,null,null,null);
      }, (err) => {
        console.log("Add Error",err)
      }
    );

  }

  delete(id:number){
    this.ps.deleteProduct(id).subscribe(
      (data) => {
        console.log("Deleted successfully")
        let idx = this.products.findIndex((e) => e.id == id);
        this.products.splice(idx,1);
      }, (err)=>
      {console.log("Delete Error",err)

      }

    )
  }


  beforeModify(modifyproduct:Product){
    // this.frmProduct = modifyproduct;
    Object.assign(this.frmProduct,modifyproduct);
  }




  Modify(){
    this.ps.updateProduct(this.frmProduct).subscribe(
      (data)=>{
        console.log("Edit Sucessful")
        let idx = this.products.findIndex((e) => e.id == this.frmProduct.id);
          this.products[idx]=data;
          this.frmProduct = new Product(null,null,null,null);
      },(err)=>{
        console.log("Edit Error",err)
      }
    )
  }
}
