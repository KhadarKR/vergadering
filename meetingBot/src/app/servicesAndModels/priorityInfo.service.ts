import { PriorityInfo } from './priorityInfo.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class PriorityInfoService {
private priorityInfos:PriorityInfo[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<PriorityInfo[]>(this.restURL);
  }

  addProduct (newPriorityInfo:PriorityInfo){
return this.http.post<PriorityInfo>(this.restURL,newPriorityInfo);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (priorityInfo:PriorityInfo){
    return this.http.put<PriorityInfo>(this.restURL+"/"+priorityInfo.Prio_Score,priorityInfo);
      }
}
