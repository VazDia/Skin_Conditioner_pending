import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrerComponent } from './pages/Auth/registrer/registrer.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'registrer',
    component:RegistrerComponent
  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'',
    component:HomeComponent
  },

  {
    
    path: 'user',
    loadChildren : ()=> import('../app/modules/app-second/app-second/app-second.module').then(m => m.AppSecondModule),
    
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
