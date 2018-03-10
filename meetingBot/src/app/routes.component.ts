import {Component} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    template:` <h1>Welcome to MEETING BOT</h1>
    `
})
export class HomeComponent {
    // colors:any[];
    // show:boolean = false;
    // price=1000.1234;
    // myDate= new Date;
    // productName = "sony tv";
    // videoUrl = "https://www.youtube.com/embed/OGI0fNvr4fo";
    // trustURL;
    constructor(private ds:DomSanitizer){
        // this.colors = ["Blue","White","Green", "Purple"]
        // this.trustURL = ds.bypassSecurityTrustResourceUrl(this.videoUrl);
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