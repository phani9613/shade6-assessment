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
  constructor( private snackBar: MatSnackBar,private _service:MyFestServiceService) { 
    this.events=[];
  }

  ngOnInit() {
    this._service.getAllFavouriteEvents().subscribe((events:any)=>{
      this.events=events;
    })
  }
  deleteFromFavourite(event){
    this._service.deleteFavourite(event).subscribe((obj:any)=>{
      this.snackBar.open('Error Occured, Regret for the inconveniece', 'Ok', {
        duration: 2000
      });
    })
  }
}
