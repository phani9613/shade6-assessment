import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PageUrlConstant } from '../enviroment.prod';
@Injectable({
  providedIn: 'root'
})
export class MyFestServiceService {

  apiPoint=PageUrlConstant.URL.API_BASE_URL;
  constructor(private _http:HttpClient) { }
  doLogin(ob:any){
    return this._http.post(this.apiPoint+"user/find",ob);
  }
  doSignup(ob:any){
    return this._http.post(this.apiPoint+"/user",ob);
  }
  getAllEvents(){
    return this._http.get(this.apiPoint+"event");
  }
  addToFavourite(ob:any){
    return this._http.post(this.apiPoint+"userevent",ob);
  }
  getAllFavouriteEvents(){
    return this._http.get(this.apiPoint+"/userevent");
  }
  deleteFavourite(ob:any){
    return this._http.delete(this.apiPoint+"/userevent/:"+ob["_id"]);
  }
}
