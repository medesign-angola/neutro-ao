import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './components/container/coming-soon.component';


@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule
  ]
})
export class ComingSoonModule { }
