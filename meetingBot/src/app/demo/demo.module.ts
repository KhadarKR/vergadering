import { ParticipantsInfoService } from './../servicesAndModels/participantsinfo.service';
import { TimeRefService } from './../servicesAndModels/timeRef.service';
import { RoomMeetingInfoService } from './../servicesAndModels/roomMeetingInfo.service';
import { RoomInfoService } from './../servicesAndModels/roomInfo.service';
import { RoomAvailableBufferService } from './../servicesAndModels/roomAvailableBuffer.service';
import { ProfileInfoService } from './../servicesAndModels/profileInfo.service';
import { PriorityInfoService } from './../servicesAndModels/priorityInfo.service';
import { MeetingInfoService } from './../servicesAndModels/meetingInfo.service';
import { EmployeeDetailsService } from './../servicesAndModels/employeeDetails.service';
import { EmployeeAgendaAvailabilityService } from './../servicesAndModels/employeeAgendaAvailability.service';
import { DaysBeforeInfoService } from './../servicesAndModels/daysBeforeInfo.service';
import { CalendarRefService } from './../servicesAndModels/calendarRef.service';
import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../demo-utils/module';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule,DialogModule
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent],
  providers:[CalendarRefService,DaysBeforeInfoService,EmployeeAgendaAvailabilityService,EmployeeDetailsService,MeetingInfoService,PriorityInfoService,
    ProfileInfoService,RoomAvailableBufferService,RoomInfoService,RoomMeetingInfoService,TimeRefService ,ParticipantsInfoService]
})
export class DemoModule {}
 