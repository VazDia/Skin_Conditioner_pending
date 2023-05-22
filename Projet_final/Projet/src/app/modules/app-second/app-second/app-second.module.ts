import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSecondRoutingModule } from './app-second-routing.module';
import { AppSecondComponent } from './app-second.component';
import { ArchiveComponent } from '../pages/archive/archive.component';
import { ServiceComponent } from '../pages/service-medical/service.component';
import { DiagnosticComponent } from '../pages/diagnostic/diagnostic.component';
import { DocumentationComponent } from '../pages/documentation/documentation.component';
import { UpdatesComponent } from '../pages/updates/updates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
    DocumentationComponent,
    DiagnosticComponent,
    ServiceComponent,
    ArchiveComponent,
     UpdatesComponent,
  ],
  imports: [
    CommonModule,
    AppSecondRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AppSecondModule { }
