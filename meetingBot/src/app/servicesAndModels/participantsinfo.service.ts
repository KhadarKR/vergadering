import { ParticipantsInfo } from './participantsinfo.model';
import { PriorityInfo } from './priorityInfo.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ParticipantsInfoService {
private participantsInfo:ParticipantsInfo[];
restURL = "http://localhost:3203/Participants_Info/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getParticipantsInfo(){
    // return this.productsData;
    return this.http.get<ParticipantsInfo[]>(this.restURL);
  }

  addParticipantsInfo (newParticipantsInfo:ParticipantsInfo){
return this.http.post<ParticipantsInfo>(this.restURL,newParticipantsInfo);
  }


  deleteParticipantsInfo (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateParticipantsInfo (participantsInfo:ParticipantsInfo){
    return this.http.put<ParticipantsInfo>(this.restURL+"/"+participantsInfo.MeetingID,participantsInfo);
      }
}
