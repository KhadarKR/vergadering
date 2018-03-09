import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {Component} from "@angular/core"

@Component({
    // Tag Name for component
    selector: "sign-in",
    // Out put for the component
    template: `<my-sign tittle="Sign In" (myEvent)="handlemyEvent($event)"></my-sign>`
})
export class SignInComponent{

    constructor(private ls:LoginService, private router:Router){

    }

        handlemyEvent(obj){
            console.log("SIGN IN COMPONENT unmae:" , obj.username, "PASSWORD :" , obj.password)
            this.ls.setUserName(obj.username);
            if(this.ls.isvaliduser(obj.username,obj.password)){
                this.router.navigate(["/manage"])
            }else{
                this.router.navigate(["/error"])
            }
        }
}