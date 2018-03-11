import { PriorityInfo } from './priorityInfo.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class PriorityInfoService {
private priorityInfos:PriorityInfo[];
restURL = "http://localhost:3204/Priority_INFO/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getPriorityInfo(){
    // return this.productsData;
    return this.http.get<PriorityInfo[]>(this.restURL);
  }

  addPriorityInfo (newPriorityInfo:PriorityInfo){
return this.http.post<PriorityInfo>(this.restURL,newPriorityInfo);
  }


  deletePriorityInfo (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updatePriorityInfo (priorityInfo:PriorityInfo){
    return this.http.put<PriorityInfo>(this.restURL+"/"+priorityInfo.Prio_Score,priorityInfo);
      }
}
