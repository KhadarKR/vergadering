import { RoomAvailableBuffer } from './roomAvailableBuffer.model';
// import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class RoomAvailableBufferService {
private roomAvailableBuffers:RoomAvailableBuffer[];
restURL = "http://localhost:3000/wsproducts/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProducts(){
    // return this.productsData;
    return this.http.get<RoomAvailableBuffer[]>(this.restURL);
  }

  addProduct (newRoomAvailableBuffer:RoomAvailableBuffer){
return this.http.post<RoomAvailableBuffer>(this.restURL,newRoomAvailableBuffer);
  }


  deleteProduct (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProduct (roomAvailableBuffer:RoomAvailableBuffer){
    return this.http.put<RoomAvailableBuffer>(this.restURL+"/"+roomAvailableBuffer.AvailableDuration,roomAvailableBuffer);
      }
}
