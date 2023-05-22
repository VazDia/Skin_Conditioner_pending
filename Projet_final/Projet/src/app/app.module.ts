import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrerComponent } from './pages/Auth/registrer/registrer.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppSecondComponent } from './modules/app-second/app-second/app-second.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatesComponent } from './modules/app-second/pages/updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrerComponent,
    LoginComponent,
    HomeComponent,
    AppSecondComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
