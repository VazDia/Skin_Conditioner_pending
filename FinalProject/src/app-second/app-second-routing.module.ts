import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSecondComponent } from './app-second.component';
import { HomeComponent } from './admin/home/home.component';
import { MedicalComponent } from './admin/medical/medical.component';
import { DiagnosticComponent } from './admin/diagnostic/diagnostic.component';
import { ArchivesComponent } from './admin/archives/archives.component';
import { ConnexionGuard } from 'src/app/page/Authentification/connexion.guard';
import { UpdateComponent } from './admin/user/update/update.component';


const routes: Routes = [
  {
    path:'',
    component: AppSecondComponent,
    children: [
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'',
        component:DiagnosticComponent
      },
      {
        path:'medical',
        component: MedicalComponent,
        canActivate: [ConnexionGuard]
      },
      {
        path:'diagnostic',
        component: DiagnosticComponent,
        canActivate: [ConnexionGuard]
      },
      {
        path: 'archive',
        component:ArchivesComponent,
        canActivate: [ConnexionGuard]
      },
    {
      path: 'update',
      component:UpdateComponent,
      canActivate: [ConnexionGuard]
      
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSecondRoutingModule { }
