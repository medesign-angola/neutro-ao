import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './components/containers/contact-us.component';
import { ContactFormComponent } from './components/views/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
