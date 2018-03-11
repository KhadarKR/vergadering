import { Component } from '@angular/core';
import {Input, Output , EventEmitter} from "@angular/core"
@Component({
 // Tag Name for component
 selector: "my-sign",
 // Out put for the component
 template: `{{tittle}}
 <form>
 <input type = "text" #frmusername placeholder = "Enter User Name"\> <br>
 <input type = "password" #frmpassword placeholder = "Enter Password"\>
 <button type="button" (click) = "onButtonClick(frmusername.value,frmpassword.value)">{{tittle}}</button>
 </form>`
})
export class MySignComponent  {
    @Input()
    tittle:String;

    @Output()
    myEvent = new EventEmitter();

    onButtonClick(username , password):void{
        console.log("User name :"+username)
        console.log("Password :"+password)
        this.myEvent.emit({username, password});

    }
}