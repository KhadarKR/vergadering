import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class MeetingInfoService {
private meetingInfos:MeetingInfo[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<MeetingInfo[]>(this.restURL);
  }

  addProduct (newMeetingInfo:MeetingInfo){
return this.http.post<MeetingInfo>(this.restURL,newMeetingInfo);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (meetingInfo:MeetingInfo){
    return this.http.put<MeetingInfo>(this.restURL+"/"+meetingInfo.MeetingId,meetingInfo);
      }
}
