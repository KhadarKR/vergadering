import { CalendarRef } from './calendarRef.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class CalendarRefService {
private calendarRefs:CalendarRef[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getCalendarRef(){
    // return this.productsData;
    return this.http.get<CalendarRef[]>(this.restURL);
  }

  addCalendarRef (newCalendarRef:CalendarRef){
return this.http.post<CalendarRef>(this.restURL,newCalendarRef);
  }


  deleteCalendarRef (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateCalendarRef (calendarRef:CalendarRef){
    return this.http.put<CalendarRef>(this.restURL+"/"+calendarRef.Day,calendarRef);
      }
}
