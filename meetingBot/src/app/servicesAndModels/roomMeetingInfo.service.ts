import { RoomMeetingInfo } from './roomMeetingInfo.model';
// import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class RoomMeetingInfoService {
private roomMeetingInfos:RoomMeetingInfo[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<RoomMeetingInfo[]>(this.restURL);
  }

  addProduct (newRoomMeetingInfo:RoomMeetingInfo){
return this.http.post<RoomMeetingInfo>(this.restURL,newRoomMeetingInfo);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (roomMeetingInfo:RoomMeetingInfo){
    return this.http.put<RoomMeetingInfo>(this.restURL+"/"+roomMeetingInfo.MeetignID,roomMeetingInfo);
      }
}
