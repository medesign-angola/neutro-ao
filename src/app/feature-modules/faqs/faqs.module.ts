import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './components/containers/faqs.component';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule
  ]
})
export class FaqsModule { }
