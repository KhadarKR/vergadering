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
      events: CalendarEvent[] = [] ;
      ca :CalendarEvent;

    modalData: {
      action: string;
      event: CalendarEvent;
    };
  
    actions: CalendarEventAction[] = [
      {
        label: '<i class="fa fa-fw fa-pencil"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.handleEvent('Edited', event);
        }
      },
      {
        label: '<i class="fa fa-fw fa-times"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.events = this.events.filter(iEvent => iEvent !== event);
          this.handleEvent('Deleted', event);
        }
      }
    ];
  
   
   
  
    activeDayIsOpen: boolean = true;
  
    constructor(private modal: NgbModal ,private ms:MeetingInfoService , private parse:ParticipantsInfoService, 
      private empse:EmployeeDetailsService , private roser:RoomInfoService) {      
    }

    ngOnInit() {
      // this.products = this.ps.getProducts();
      this.ms.getMeetingsInfo().subscribe(
        (data) => {this.eventsfromDatabase = data;
          for (var index = 0; index < this.eventsfromDatabase.length; index++) {
            console.log(data[index])
            this.events.push({
      title: data[index].Meeting_Title,
      start:  new Date(data[index].PlannedDT),
      // startTime: data[index].PlannnedTM.toString(),
      duration: data[index].MeetingDuration,
      color: colors.red ,
      actions : this.actions
    })
    this.refresh.next();
            }
          }
        ,
        (err) => console.log("Error",err)
      );

      this.ms.getMeetingsInfo().subscribe(
        (data) => {this.eventsfromDatabase = data;
          for (var index = 0; index < this.eventsfromDatabase.length; index++) {
            console.log(data[index])
            this.events.push({
      title: data[index].Meeting_Title,
      start:  new Date(data[index].PlannedDT),
      color: colors.red ,
      actions : this.actions
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
  
    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.handleEvent('Dropped or resized', event);
      this.refresh.next();
    }
  
    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
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
  }
  