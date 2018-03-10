import { EmployeeAgendaAvailability } from './employeeAgendaAvailability.model';
// import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class EmployeeAgendaAvailabilityService {
private employeeAgendaAvailabilitys:EmployeeAgendaAvailability[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<EmployeeAgendaAvailability[]>(this.restURL);
  }

  addProduct (newEmployeeAgendaAvailability:EmployeeAgendaAvailability){
return this.http.post<EmployeeAgendaAvailability>(this.restURL,newEmployeeAgendaAvailability);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (employeeAgendaAvailability:EmployeeAgendaAvailability){
    return this.http.put<EmployeeAgendaAvailability>(this.restURL+"/"+employeeAgendaAvailability.AvailEnd,employeeAgendaAvailability.AvailStart);
      }
}
