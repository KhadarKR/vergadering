import { GrowlModule } from 'primeng/growl';
import { NgModule } from "@angular/core";
import { RequestFormComponent } from "./requestForm.component";
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { ParticipantService } from "./requestForm.service";
import { NgIf } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
    providers : [ParticipantService] ,
    declarations:[RequestFormComponent] ,
    exports : [RequestFormComponent],
    imports :[BrowserAnimationsModule,DropdownModule,
        BrowserModule, AccordionModule,ButtonModule,
        TableModule,RadioButtonModule,FormsModule,CheckboxModule ,GrowlModule]

})
export class RequestFormModule{

    

    }

