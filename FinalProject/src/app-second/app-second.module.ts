import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSecondRoutingModule } from './app-second-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { MedicalComponent } from './admin/medical/medical.component';
import { ArchivesComponent } from './admin/archives/archives.component';
import { DiagnosticComponent } from './admin/diagnostic/diagnostic.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './admin/user/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    HomeComponent,
    MedicalComponent,
    ArchivesComponent,
    DiagnosticComponent,
    UpdateComponent, 
    
  ],
  imports: [
    CommonModule,
    AppSecondRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class AppSecondModule { }
