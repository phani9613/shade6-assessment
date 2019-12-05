import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-nav',
  templateUrl: './event-nav.component.html',
  styleUrls: ['./event-nav.component.scss']
})
export class EventNavComponent implements OnInit {
  obUser:any;
  constructor() { }

  ngOnInit() {
    this.obUser=localStorage.getItem("obUser");
  }
  doLogout(){
    localStorage.clear();
  }
  

}
