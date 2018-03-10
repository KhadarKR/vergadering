import { EmployeeDetails } from './employeeDetails.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class EmployeeDetailsService{
private employeeDetails:EmployeeDetails[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<EmployeeDetails[]>(this.restURL);
  }

  addProduct (newEployeeDetails:EmployeeDetails){
return this.http.post<EmployeeDetails>(this.restURL,newEployeeDetails);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (employeeDetail:EmployeeDetails){
    return this.http.put<EmployeeDetails>(this.restURL+"/"+employeeDetail.Avail_End, employeeDetail);
      }
}
