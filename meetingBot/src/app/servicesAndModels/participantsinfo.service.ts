import { ParticipantsInfo } from './participantsinfo.model';
import { PriorityInfo } from './priorityInfo.model';
//import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ParticipantsInfoService {
private participantsInfo:ParticipantsInfo[];
restURL = "http://localhost:3003/Participants_Info/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getParticipantsInfoService(){
    // return this.productsData;
    return this.http.get<ParticipantsInfo[]>(this.restURL);
  }

  addParticipantsInfoService (newParticipantsInfo:ParticipantsInfo){
return this.http.post<ParticipantsInfo>(this.restURL,newParticipantsInfo);
  }


  deleteParticipantsInfoService (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateParticipantsInfoService (participantsInfo:ParticipantsInfo){
    return this.http.put<ParticipantsInfo>(this.restURL+"/"+participantsInfo.MeetingID,participantsInfo);
      }
}
