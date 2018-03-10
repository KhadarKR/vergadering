import { EmployeeMeetingInfo } from './employeeMeetingInfo.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class EmployeeMeetingInfoService {
private employeeMeetingInfos:EmployeeMeetingInfo[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<EmployeeMeetingInfo[]>(this.restURL);
  }

  addProduct (newEmployeeMeetingInfo:EmployeeMeetingInfo){
return this.http.post<EmployeeMeetingInfo>(this.restURL,newEmployeeMeetingInfo);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (employeeMeetingInfo:EmployeeMeetingInfo){
    return this.http.put<EmployeeMeetingInfo>(this.restURL+"/"+employeeMeetingInfo.MeetingId,employeeMeetingInfo);
      }
}
