import { LoginService } from './login/login.service';
import {Component , OnInit} from "@angular/core"
import {MenuItem} from 'primeng/api';

@Component({
    // Tag Name for component
    selector: "app-header",
    // Out put for the component
    template: `<div>
    <p-menubar [model]="menuitems">
   <div> Welcome {{showUserName()}} </div> 
    </p-menubar>
    </div>
    `
})
export class HeaderComponent implements OnInit{
    menuitems:MenuItem[];
    hdrUserName:String;
    adminMenuItems:MenuItem[];

    constructor(private ls:LoginService){
        this.hdrUserName = "Guest";
    }

    showUserName():String{
        this.hdrUserName = this.ls.getUserName();
        return this.hdrUserName;
    }
    ngOnInit(){
        this.menuitems = [
            {label: 'Home',    routerLink:['/'] , routerLinkActiveOptions:{exact:true}},
            {label: 'Log In', routerLink:['/LogIn']},
            {label: 'Sign Up', routerLink:['/SignUp']},
            {label: 'Shopping List', routerLink:['/list']}

    ]

//     this.adminMenuItems = [
//         {label: 'Home',    routerLink:['/'] , routerLinkActiveOptions:{exact:true}},
//         {label: 'Sign Out', routerLink:['/SignOut']},
//         {label: 'Shopping List', routerLink:['/list']},
//         {label: 'Manage products', routerLink:['/manage']}

// ]
    }

    isUserLoggedIn(){
        return !this.ls.getIsLoggedin();
    }

    isAdminLoggedIn(){
        return this.ls.getIsLoggedin();
    }

}