import { ProfileInfo } from './profileInfo.model';
// import { MeetingInfo } from './meetingInfo.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ProfileInfoService {
private profileInfos:ProfileInfo[];
restURL = "http://localhost:3205/Profile_INFO/";
  constructor(private http:HttpClient) { 
   
    // this.productsData = [new Product(1,"Bravia" , 4500 , "SOny Smart Tv") ,new Product(2 , "Galaxy", 15000 ,"Samsung Mobile")];
  }

  getProfileInfo(){
    // return this.productsData;
    return this.http.get<ProfileInfo[]>(this.restURL);
  }

  addProfileInfo (newProfileInfo:ProfileInfo){
return this.http.post<ProfileInfo>(this.restURL,newProfileInfo);
  }


  deleteProfileInfo (id:number){
    return this.http.delete(this.restURL+"/"+id);
      }


  updateProfileInfo (profileInfo:ProfileInfo){
    return this.http.put<ProfileInfo>(this.restURL+"/"+profileInfo.Level,profileInfo);
      }
}
