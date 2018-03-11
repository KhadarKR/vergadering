import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinout',
  templateUrl: './sinout.component.html',
  styleUrls: ['./sinout.component.css']
})
export class SinoutComponent implements OnInit {

  constructor(private ls:LoginService) { }

  ngOnInit() {
    this.ls.setIsLoggedin(false);
  }

}
