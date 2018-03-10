import { RoomInfo } from './roomInfo.model';
// import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class RoomInfoService {
private roomInfos:RoomInfo[];
restURL = "http://localhost:3206/ROOM_INFO/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getRoomInfo(){
    // return this.productsData;
    return this.http.get<RoomInfo[]>(this.restURL);
  }

  addRoomInfo (newRoomInfo:RoomInfo){
return this.http.post<RoomInfo>(this.restURL,newRoomInfo);
  }


  deleteRoomInfo (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateRoomInfo (roomInfo:RoomInfo){
    return this.http.put<RoomInfo>(this.restURL+"/"+roomInfo.RoomID,roomInfo);
      }
}
