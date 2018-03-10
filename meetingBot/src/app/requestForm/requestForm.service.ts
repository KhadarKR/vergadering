import { Participant } from './participant.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ParticipantService {
private productsData:Participant[];
restURL = "http://localhost:3000/wspatricipants/";
  constructor(private http:HttpClient) { 
}

  getParticipants(){
    return this.http.get<Participant[]>(this.restURL);
  }

  addParticipant (newParticipant:Participant){
return this.http.post<Participant>(this.restURL,newParticipant);
  }


  deleteParticipant (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }
}
