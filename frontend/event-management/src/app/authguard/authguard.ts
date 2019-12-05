import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private flag:boolean;
  private userName:string;
  constructor(private router:Router,private snackBar:MatSnackBar){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.flag=false;
      this.userName=localStorage.getItem("obUser");
      if(this.userName!=null){
        this.flag=true;
      }else{
        this.snackBar.open(' Please Login to Continue ','Ok',{
          duration:3000
        })
      this.router.navigate(["/login"]);
      }
      
    return this.flag;
  }
}
