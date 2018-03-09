import {Component} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    template:` <h3> Welcome to Shopping Application
    <br>Prive Values is {{price|currency:"CAD"}}
    <br> Current Date and  Time is {{myDate|date:"dd/MM/yyyy:HH-mm-sss"}}
    <br>Product name is {{productName | uppercase|reverseText}}
    </h3>
    <iframe [src] = "trustURL" width="75%" height="200"></iframe>
    <ul>
    <li *ngFor="let c of colors">
    {{c}}
    </li>
    </ul>
    <div><h3 *ngIf="show; else showworld" >Hello ngIF block</h3></div>
    <ng-template #showworld>Hello World</ng-template>
    `
})
export class HomeComponent {
    colors:any[];
    show:boolean = false;
    price=1000.1234;
    myDate= new Date;
    productName = "sony tv";
    videoUrl = "https://www.youtube.com/embed/OGI0fNvr4fo";
    trustURL;
    constructor(private ds:DomSanitizer){
        this.colors = ["Blue","White","Green", "Purple"]
        this.trustURL = ds.bypassSecurityTrustResourceUrl(this.videoUrl);
        // this.show = true;
    }

}


@Component({
    template:` <h1 class="Well"> 404. Not Found  </h1>`
})
export class NotFoundComponent {

}

@Component({
    template:` <h1 class="Well"> Invalid Credentials  </h1>`
})
export class ErrorComponent {

}