import { RoomInfo } from './../servicesAndModels/roomInfo.model';
import { ParticipantsInfo } from './../servicesAndModels/participantsinfo.model';
import { EmployeeDetails } from './../servicesAndModels/employeeDetails.model';
import { RoomInfoService } from './../servicesAndModels/roomInfo.service';
import { EmployeeDetailsService } from './../servicesAndModels/employeeDetails.service';
import { ParticipantsInfoService } from './../servicesAndModels/participantsinfo.service';
import { MeetingInfo } from './../servicesAndModels/meetingInfo.model';
import { MeetingInfoService } from './../servicesAndModels/meetingInfo.service';
import { OnInit } from '@angular/core';
import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef
  } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
  } from 'date-fns';
  import { Subject } from 'rxjs/Subject';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
  } from 'angular-calendar';
  
  const colors: any = {
    red: {
      // red
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      // blue
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yello: {
      // yellow
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    },
    
  };
  
  @Component({
    moduleId: '__moduleName',
    selector: 'mwl-demo-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['styles.css'],
    templateUrl: 'template.html'
  })
  export class DemoComponent implements  OnInit{
    @ViewChild('modalContent') modalContent: TemplateRef<any>;
  
    view: string = 'month';
  
    viewDate: Date = new Date();
    refresh: Subject<any> = new Subject();
    eventsfromDatabase: MeetingInfo[] = [];
    employeeinfo:EmployeeDetails[] = [];
    participants:ParticipantsInfo[];
    roomsinfo:RoomInfo[];
      events: CalendarEvent[] = [] ;
      ca :CalendarEvent;

    modalData: {
      action: string;
      event: CalendarEvent;
    };

  // meetingData: { 
      id:number;
      Tittle:String;
      StartDate:Date;
      StartTime:Date;
      Duration:number;
      Requestor:number;
      RequestorName:String;
      ParticipantsNames:String[];
      Participants:number[] = [];
      RoomNumber:number;
    // }
  
    // actions: CalendarEventAction[] = [
    //   {
    //     label: '<i class="fa fa-fw fa-pencil"></i>',
    //     onClick: ({ event }: { event: CalendarEvent }): void => {
    //       this.handleEvent('Edited', event);
    //     }
    //   },
    //   {
    //     label: '<i class="fa fa-fw fa-times"></i>',
    //     onClick: ({ event }: { event: CalendarEvent }): void => {
    //       this.events = this.events.filter(iEvent => iEvent !== event);
    //       this.handleEvent('Deleted', event);
    //     }
    //   }
    // ];
  
   
   
  
    activeDayIsOpen: boolean = true;
  
    constructor(private modal: NgbModal ,private ms:MeetingInfoService , private parse:ParticipantsInfoService, 
      private empse:EmployeeDetailsService , private roser:RoomInfoService) {      
    }

    ngOnInit() {
      // this.meetingData = {id:null,Tittle:null, RequestorName:null, StartDate:null,StartTime:null,Duration:null,Requestor:null,Participants:null,ParticipantsNames:null,RoomNumber:null};
      this.ms.getMeetingsInfos().subscribe(
        (data) => {this.eventsfromDatabase = data;
          for (var index = 0; index < this.eventsfromDatabase.length; index++) {
            console.log(data[index])
            this.events.push({
        id:  data[index].MeetingID,
      title: data[index].Meeting_Title,
      start:  new Date(data[index].PlannedDT),
      // startTime: data[index].PlannnedTM.toString(),
      // duration: data[index].MeetingDuration,
      color: colors.red ,
      // actions : this.actions
    })
    this.refresh.next();
            }
          }
        ,
        (err) => console.log("Error",err)
      );
        }
    
  
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
          this.viewDate = date;
          this.view = "day";
        } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
          this.view = "day";
        }
      }
    }
  
    // eventTimesChanged({
    //   event,
    //   newStart,
    //   newEnd
    // }: CalendarEventTimesChangedEvent): void {
    //   event.start = newStart;
    //   event.end = newEnd;
    //   this.handleEvent('Dropped or resized', event);
    //   this.refresh.next();
    // }
  
    handleEvent(action:string, event: CalendarEvent): void {
      this.modalData = { event, action };


      this.ms.getMeetingsInfos().subscribe(
        (data) => {
          this.eventsfromDatabase = data;
          for (var index = 0; index < data.length; index++) {
           if (event.id == data[index].MeetingID) {
            this.id = data[index].MeetingID;
            this.Tittle =   data[index].Meeting_Title;
            this.StartDate =  data[index].PlannedDT;
            this.StartTime  = this.eventsfromDatabase[index].PlannnedTM;
            this.Duration = data[index].MeetingDuration;
            this.Requestor = data[index].RequestorID;
            this.RoomNumber = data[index].RoomID;
            console.log(this.RoomNumber);
            break;
           } 
            }
          }
        ,
        (err) => console.log("Error",err)
      );

      this.parse.getParticipantsInfo().subscribe(
        (data) => {this.participants = data;
          let x = 0;
          for (var index = 0; index < this.participants.length; index++) {
           if (this.id == data[index].MeetingID) {
            this.Participants[x] =   data[index].EmpID;
            alert(data[index].EmpID)
            x++;
           } 
            }
          }
        ,
        (err) => console.log("Error",err)
      );

      this.empse.getEmployeeDetails().subscribe(
        (data) => {this.employeeinfo = data;
          let x = 0;
          for (var index = 0; index < data.length; index++) {
            if (this.Requestor == data[index].EmpID) {
              this.RequestorName = data[index].EmpName;
            } 
            for (var index1 = 0; index1 < this.Participants.length; index1++) {
                if (this.Participants[index1] == data[index].EmpID) {
                this.ParticipantsNames[x] =   data[index].EmpName;
                x=x+1;
               } 
              
            }
           
            }
          }
        ,
        (err) => console.log("Error",err)
      );


      this.showDialog();
      

      // this.modal.open(this.modalContent, { size: 'lg' });
    }
  
    addEvent(): void {
      this.events.push({
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      });
      this.refresh.next();
    }


    display: boolean = false;
    
        showDialog() {
            this.display = true;
        }
  }
  
