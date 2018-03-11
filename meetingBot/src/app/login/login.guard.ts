import { LoginService } from './login.service';
import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private ls:LoginService){
    }
    canActivate(){
        return this.ls.getIsLoggedin();
    }
}
