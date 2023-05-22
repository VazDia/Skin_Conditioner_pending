import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './page/Authentification/register/register.component';
import {LoginComponent} from './page/Authentification/login/login.component';
import {AppSecondModule} from '../app-second/app-second.module';
import { HomesComponent } from './page/homes/homes.component';
const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  },

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: HomesComponent,
   
  },

  /*{
    path : '',
    redirectTo : 'background',
    pathMatch : 'full'
  }, */

  
  {
    
  path: 'admin',
  loadChildren : ()=> import('../app-second/app-second.module').then(m => m.AppSecondModule),
  
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
