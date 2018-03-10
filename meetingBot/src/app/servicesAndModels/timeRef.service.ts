import { TimeRef } from './timeRef.model';
// import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class TimeRefService {
private timeRefs:TimeRef[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<TimeRef[]>(this.restURL);
  }

  addProduct (newTimeRef:TimeRef){
return this.http.post<TimeRef>(this.restURL,newTimeRef);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (timeRef:TimeRef){
    return this.http.put<TimeRef>(this.restURL+"/"+timeRef.TimeSlotID,timeRef);
      }
}
