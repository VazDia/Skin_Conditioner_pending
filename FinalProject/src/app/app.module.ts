import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './page/Authentification/register/register.component';
import { LoginComponent } from './page/Authentification/login/login.component';
import { AppSecondComponent } from '../app-second/app-second.component';
import { NavbarComponent } from '../app-second/components/navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms'
import { FooterComponent } from '../app-second/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


import { HomesComponent } from './page/homes/homes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AppSecondComponent,
    NavbarComponent,
    FooterComponent,
    HomesComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
