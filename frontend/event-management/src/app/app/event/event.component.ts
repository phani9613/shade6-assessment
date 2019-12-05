import { Component, OnInit } from '@angular/core';
import { MyFestServiceService } from 'src/app/service/my-fest-service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MyEvent } from 'src/app/modals/MyEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private obEvent:MyEvent;
  options:FormGroup;
  constructor(private snackBar:MatSnackBar,fb: FormBuilder, private router:Router,private _service:MyFestServiceService) {
   this.obEvent=new MyEvent();
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
   }

  ngOnInit() {
  }
  addEvent(){
    this._service.addEvent(this.obEvent).subscribe((res:any)=>{
      this.snackBar.open('Succefully Added Event','Ok',{
        duration:2000
      }) 
        setTimeout(() => {
          this.router.navigate(["/home"]);
      }, 1000);
    })
  }
}
