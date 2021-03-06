import { DaysBeforeInfo } from './daysBeforeInfo.model';
// import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class DaysBeforeInfoService {
private daysBeforeInfos:DaysBeforeInfo[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getDaysBeforeInfo(){
    // return this.productsData;
    return this.http.get<DaysBeforeInfo[]>(this.restURL);
  }

  addDaysBeforeInfo (newDaysBeforeInfo:DaysBeforeInfo){
return this.http.post<DaysBeforeInfo>(this.restURL,newDaysBeforeInfo);
  }


  deleteDaysBeforeInfo (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateDaysBeforeInfo (daysBeforeInfo:DaysBeforeInfo){
    return this.http.put<DaysBeforeInfo>(this.restURL+"/"+daysBeforeInfo.DaysPriorScore,daysBeforeInfo);
      }
}
