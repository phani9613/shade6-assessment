import { Component, OnInit } from '@angular/core';
import { MyFestServiceService } from 'src/app/service/my-fest-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
events:Array<any>;
events_count=0;
  constructor( private snackBar: MatSnackBar,private _service:MyFestServiceService) { 
    this.events=[];
  }

  ngOnInit() {
    this._service.getAllFavouriteEvents().subscribe((events:any)=>{
      this.events=events;
    })
    this._service.eventsRegistered().subscribe((obj:any)=>{
      this.events_count=obj[0]["events_registered"];
    })
  }
  deleteFromFavourite(event){
    this._service.deleteFavourite(event).subscribe((obj:String)=>{
     this.ngOnInit();
      this.snackBar.open('Event is Deleted', 'Ok', {
        duration: 2000
      });
    },
    (err)=>{
      this.snackBar.open('Event is not Deleted', 'Ok', {
        duration: 2000
      });
    })
  }
}
