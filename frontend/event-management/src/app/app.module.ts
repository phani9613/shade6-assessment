import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyFestServiceService } from './service/my-fest-service.service';
import { HomeComponent, DialogDataExampleDialog } from './app/home/home.component';
import { EventNavComponent } from './app/event-nav/event-nav.component';
import { FavouritesComponent } from './app/favourites/favourites.component';
import { EventComponent } from './app/event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EventNavComponent,
    EventComponent,
    DialogDataExampleDialog,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    

    
  ],
  entryComponents: [
    DialogDataExampleDialog,
],
  providers: [MyFestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
