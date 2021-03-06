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

  getEmployeeMeetingInfo(){
    // return this.productsData;
    return this.http.get<EmployeeMeetingInfo[]>(this.restURL);
  }

  addEmployeeMeetingInfo (newEmployeeMeetingInfo:EmployeeMeetingInfo){
return this.http.post<EmployeeMeetingInfo>(this.restURL,newEmployeeMeetingInfo);
  }


  deleteEmployeeMeetingInfo (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateEmployeeMeetingInfo (employeeMeetingInfo:EmployeeMeetingInfo){
    return this.http.put<EmployeeMeetingInfo>(this.restURL+"/"+employeeMeetingInfo.MeetignID,employeeMeetingInfo);
      }
}
