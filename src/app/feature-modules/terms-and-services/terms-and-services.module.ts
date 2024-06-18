import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndServicesRoutingModule } from './terms-and-services-routing.module';
import { TermsAndServicesComponent } from './components/containers/terms-and-services.component';
import { ContentComponent } from './components/views/content/content.component';


@NgModule({
  declarations: [
    TermsAndServicesComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    TermsAndServicesRoutingModule
  ]
})
export class TermsAndServicesModule { }
