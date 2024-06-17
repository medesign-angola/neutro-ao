import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './components/containers/about-us.component';
import { HeroComponent } from './components/views/hero/hero.component';
import { ContentComponent } from './components/views/content/content.component';
import { CommitmentComponent } from './components/views/commitment/commitment.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    HeroComponent,
    ContentComponent,
    CommitmentComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
