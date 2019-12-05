import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
 import { User } from '../modals/user';
import { MyFestServiceService } from '../service/my-fest-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private obUser:User;
options:FormGroup;
  
get diagnostic():any{
  return JSON.stringify(this.obUser);
}
  constructor( 
    private snackBar: MatSnackBar, fb: FormBuilder,private router:Router,private _service:MyFestServiceService) {
    this.obUser=new User();
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  onLogin(){
    if(this.obUser.getEmail()!=null){
      console.log(this.obUser);
    this._service.doLogin(this.obUser).subscribe(
      (res:any)=>{
        if(res[0]._id){
          localStorage.setItem("obUser",JSON.stringify(res));
          localStorage.setItem("userId",res[0]._id);
          //this.sharingService.emitLoginChange();
          this.snackBar.open('Login Successful', 'Ok', {
            duration: 1000
          });

          this.router.navigate(["/home"]);
         // window.location.reload();
       }else{
      this.snackBar.open('UserName or Password is Wrong', 'Ok', {
        duration: 2000
      });
         
           this.router.navigate(["/login"]);
       }
      },(error:HttpErrorResponse)=>
      {
      
        this.snackBar.open('Some Internal Error Please Try after Some Time', 'Ok', {
          duration: 2000
        });
      }
    )
    }else{
      this.snackBar.open('please fill all fields', 'Ok', {
        duration: 2000
      });
     
      this.router.navigate(["/login"]);

    }

  }

  ngOnInit() {

  }

}
