import { Component } from '@angular/core';

@Component({
 // Tag Name for component
 selector: "sign-up",
 // Out put for the component
 template: `<my-sign [tittle]="myTittle"></my-sign>`
}) 
export class SignUpComponent{
    myTittle = "Quict Sign Up"
}