import {Component} from "@angular/core"

@Component({
    // Tag Name for component
    selector: "app-root",
    // Out put for the component
    templateUrl: "./app.component.html"
})
export class AppComponent{
 appHeading:String;
 count:number;
 constructor(){
     this.appHeading = "Angular Heading"
     this.count = 0;
 }

 hanldeButtonClick():void{
this.appHeading = "Changed value";
 }

 incrementCount():void{
     this.count++;
 }
}