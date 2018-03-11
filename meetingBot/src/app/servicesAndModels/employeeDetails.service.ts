import { EmployeeDetails } from './employeeDetails.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class EmployeeDetailsService{
private employeeDetails:EmployeeDetails[];
restURL = "http://localhost:3201/Employee_Details/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getEmployeeDetails(){
    // return this.productsData;
    return this.http.get<EmployeeDetails[]>(this.restURL);
  }

  addEmployeeDetails (newEployeeDetails:EmployeeDetails){
return this.http.post<EmployeeDetails>(this.restURL,newEployeeDetails);
  }


  deleteEmployeeDetails (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateEmployeeDetails (employeeDetail:EmployeeDetails){
    return this.http.put<EmployeeDetails>(this.restURL+"/"+employeeDetail.Avail_End, employeeDetail);
      }
}
