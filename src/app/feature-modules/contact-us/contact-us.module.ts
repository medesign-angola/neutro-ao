import { NgModule } from '@angular/core';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './components/containers/contact-us.component';
import { ContactFormComponent } from './components/views/contact-form/contact-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactUsComponent,
    ContactFormComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
