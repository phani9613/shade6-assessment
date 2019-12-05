import { Component, OnInit, Inject } from '@angular/core';
import { MyFestServiceService } from 'src/app/service/my-fest-service.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MyEvent } from 'src/app/modals/MyEvent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
events:Array<any>;
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar,private _service:MyFestServiceService) { 
    this.events=[];
  }
 userId=localStorage.getItem("userId");
  ngOnInit() {
    this._service.getAllEvents().subscribe((events:any)=>{
      this.events=events;
    })
  }
  doSaveAsFavourite(event){
    let obj={
      "user_id":this.userId,
      "event_id":event._id,
      "event_name":event.name,
      "event_type":event.type,
      "event_members_count":event.members_count
    }
    this._service.addToFavourite(obj).subscribe((userevent:any)=>{
      this.snackBar.open('Added to Favourites', 'Ok', {
        duration: 2000
      });
    },
    (err)=>{
      this.snackBar.open('Error Occured, Regret for the inconveniece', 'Ok', {
        duration: 2000
      });
    })
  }
  doEdit(event){
    console.log(event)
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        noti: event
      }
    });
  }


}

@Component({
  selector: 'dialog-overview-example-sheet',
  templateUrl: 'dialog.html',
  
})
export class DialogDataExampleDialog {
  
  public dialog: MatDialog;
  private breakpointObserver: BreakpointObserver;
  private router:Router;
  private obEvent:MyEvent;
  options:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private _service:MyFestServiceService,
  private snackBar: MatSnackBar,
  fb: FormBuilder,
  private dialogRef: MatDialogRef<DialogDataExampleDialog>) {
  this.obEvent=data.noti;
  this.options = fb.group({
    hideRequired: false,
    floatLabel: 'auto',
  });
}
  
  ngOnInit(){
   

  }
  updateEvent(){
    this._service.updateEvent(this.obEvent).subscribe((res:any)=>{
      this.snackBar.open('Updated Successfully', 'Ok', {
        duration: 2000
      });
      this.dialogRef.close();
    })
  }
 
}

