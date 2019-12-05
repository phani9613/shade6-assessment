import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PageUrlConstant } from '../enviroment.prod';
@Injectable({
  providedIn: 'root'
})
export class MyFestServiceService {

  apiPoint=PageUrlConstant.URL.API_BASE_URL;
  user=localStorage.getItem("userId");
  
  constructor(private _http:HttpClient) { }
  doLogin(ob:any){
    return this._http.post(this.apiPoint+"user/find",ob);
  }
  doSignup(ob:any){
    return this._http.post(this.apiPoint+"user",ob);
  }
  getAllEvents(){
    return this._http.get(this.apiPoint+"event");
  }
  addToFavourite(ob:any){
    return this._http.post(this.apiPoint+"userevent",ob);
  }
  getAllFavouriteEvents(){
    console.log(this.user)
    return this._http.get(this.apiPoint+"userevent/?user_id="+this.user);
  }
  deleteFavourite(ob:any){
    return this._http.delete(this.apiPoint+"userevent/?id="+ob["_id"]);
  }
  eventsRegistered(){
    return this._http.get(this.apiPoint+"userevent/events_registered/?user_id="+this.user);
  }
  addEvent(ob:any){
    return this._http.post(this.apiPoint+"event",ob);
  }
  updateEvent(ob:any){
    return this._http.put(this.apiPoint+"event/?id="+ob["_id"],ob);
  }
}
