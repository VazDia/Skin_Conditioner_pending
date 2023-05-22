import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSecondComponent } from './app-second.component';
import { DocumentationComponent } from '../pages/documentation/documentation.component';
import { DiagnosticComponent } from '../pages/diagnostic/diagnostic.component';
import { ServiceComponent } from '../pages/service-medical/service.component';
import { ArchiveComponent } from '../pages/archive/archive.component';
import { ConnexionGuard } from 'src/app/guards/connexion.guard';
import { UpdatesComponent } from '../pages/updates/updates.component';

const routes: Routes = [
  {
    path:'',
    component: AppSecondComponent,
    children: [
      {
        path:'documentation',
        component:DocumentationComponent
        
      },

      {
        path:'update',
        component:UpdatesComponent,
        canActivate:[ConnexionGuard]
        
      },

      {
        path:'diagnostic',
        component:DiagnosticComponent,
        canActivate:[ConnexionGuard]
      },

      {
        path:'service',
        component: ServiceComponent,
        canActivate:[ConnexionGuard]
        
      },

      {
        path:'archive',
        component: ArchiveComponent,
        canActivate:[ConnexionGuard]
      },
      {
        path:'',
        component: DocumentationComponent
      },
      
      /*{
        path:'',
        redirectTo :'documentation',
        pathMatch : 'full'
      },
      */
    ]
    
 }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSecondRoutingModule { }
