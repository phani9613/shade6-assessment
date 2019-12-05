import { Component, OnInit } from '@angular/core';
import { MyFestServiceService } from 'src/app/service/my-fest-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
events:Array<any>;
  constructor( private snackBar: MatSnackBar,private _service:MyFestServiceService) { 
    this.events=[];
  }
 obUser=localStorage.getItem("obUser");
  ngOnInit() {
    this._service.getAllEvents().subscribe((events:any)=>{
      this.events=events;
    })
  }
  doSaveAsFavourite(event){
    let obj={
      "user_id":this.obUser["_id"],
      "event_id":event._id
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

}
