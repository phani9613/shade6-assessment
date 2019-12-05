import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './app/home/home.component';
import { AuthGuard } from './authguard/authguard';
import { FavouritesComponent } from './app/favourites/favourites.component';
import { EventComponent } from './app/event/event.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  { path: "login", component: LoginComponent },

  { path: "signup", component: SignupComponent },
  {
    path: "home",
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "favourites",
    component: FavouritesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "event",
    component: EventComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
