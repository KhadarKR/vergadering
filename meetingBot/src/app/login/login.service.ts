import {Injectable} from "@angular/core"

@Injectable()
export class LoginService{
    private userName:String = "Visitor"

setUserName(userName:String){
this.userName = userName;
}

getUserName ():String{
    return this.userName;
}
isvaliduser(username:string,pwd:string){
    // if (username=="admin") {
    //     this.isLoggedin = true;
    //     return true;
    // } else {
    //     this.isLoggedin = false;
    //     return false;
    // }
    return true;
}

private isLoggedin:boolean = false;
setIsLoggedin(val:boolean){
    this.isLoggedin = val;
    }
    
    getIsLoggedin ():boolean{
        return this.isLoggedin;
    }

}