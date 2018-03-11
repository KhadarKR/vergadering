import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MeetingInfoService } from './../servicesAndModels/meetingInfo.service';
import { MeetingInfo } from './../servicesAndModels/meetingInfo.model';
import { Component, OnInit, Input } from '@angular/core';
import {Participant} from './participant.model';
import {ParticipantService} from './requestForm.service';
import {SelectItem} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {Message} from 'primeng/api';

@Component({
  selector: 'request-form',
  templateUrl: './requestForm.component.html'
})
export class RequestFormComponent implements OnInit {
    tittle:string;
    requestor:number;
    FromDate:Date;
    Todate:Date;
    Fromtime:Date;
    ToTime:Date;
    Repetative:boolean;
    selectedpriorities:  SelectItem[];
    priority:Priority = {id:4};
    participants:Participant[] = [] ;
    growl:boolean = false;
    msgs: Message[] = [];
    frmParticipant:Participant = new Participant(null,null);
    meetingInfo:MeetingInfo =  new MeetingInfo(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);

    constructor(private ps:ParticipantService , private mes : MeetingInfoService,private router:Router) {

        this.selectedpriorities = [{label:'1',value:{id:1}},
            {label:'2',value:{id:2}},
            {label:'3',value:{id:3}},
            {label:'4',value:{id:4}}];

            // this.meetingInfo
     }
    @Input()
    selectedValue: String = "YES" ;

    @Input()
    ValueRoom: String = "YES" ;

    @Input()
    ValueConf: String = "YES" ;

  ngOnInit() {
    // this.ps.getParticipants().subscribe(
    //     (data) => this.participants = data,
    //     (err) => console.log("Error",err)
    // );
  }

  addParticipantToList(participant:Participant){
    // this.ps.addParticipant(this.frmParticipant).subscribe(
    //     (data) =>{
    //       console.log("Add Sucessful")
         this.participants.push(this.frmParticipant);
         this.frmParticipant = new Participant(null,null);
    //     }, (err) => {
    //       console.log("Add Error",err)
    //     }
    //   );
}
deleteParticipantFromList(name:String){
          let idx = this.participants.findIndex((e) =>e.name==name);
          this.participants.splice(idx,1);
       
}



addMeetingsInfo(){
//  this.meetingInfo = new MeetingInfo{"MeetingID",'1', "Meeting_Title", this.tittle,"RequestorID", this.requestor , "Priority",this.selectedValue , 
//   "InitiatingTime",this.Fromtime, "BOT_Nr_Replan",0,"REQ_Nr_Replan",0, "TYPE",false, "PreferedStartDT",this.FromDate,"PreferEndDT",this.Todate,"PreferStartTM",this.Fromtime,
//   "PreferEndTM",this.ToTime , "RoomReq",this.ValueRoom ,"RoomID",0, "Planned_YN", "Y", "MeetingDuration",0, "PlannedDT", new Date(),"PlannnedTM",new Date()};
// this.meetingInfo.MeetingID = 12346;
  this.meetingInfo.Meeting_Title = this.tittle;
  this.meetingInfo.RequestorID = this.requestor;
  this.meetingInfo.Priority = this.priority.id.toString();
  this.meetingInfo.PlannedDT = this.FromDate
  this.meetingInfo.PlannnedTM =this.Fromtime;
  // this.meetingInfo
  // this.meetingInfo
  // this.meetingInfo
  // this.meetingInfo
  // this.meetingInfo
  // this.meetingInfo
  // this.meetingInfo
 this.meetingInfo
 
    
  
  this.mes.addMeetingsInfo(this.meetingInfo).subscribe(
    (data) =>{
      console.log("Add Sucessful")
    //  this.meetingInfo.push(data);
     this.meetingInfo = new MeetingInfo(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
    }, (err) => {
      console.log("Add Error",err)
    }
  );
  // alert(this.FromDate);
  // alert(new Date("2018-03-11") );
  if (this.FromDate  == new Date("2018-03-11")) {
    
  this.router.navigate(["/Calendar"]) 
} else {
  this.growl = true;
  this.msgs.push({severity:'info', summary:'Info Message', detail:'Meeting will be planned '});
}
}


requestCancel(){
  this.router.navigate(["/Calendar"]) 
}
}



interface Priority {
    id: number;
  }
