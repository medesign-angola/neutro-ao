import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/containers/home.component';
import { BannerComponent } from './components/views/banner/banner.component';
import { MobileBannerCarouselComponent } from './templates/carousel/banner/mobile/mobile.component';
import { DesktopBannerCarouselComponent } from './templates/carousel/banner/desktop/desktop.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    MobileBannerCarouselComponent,
    DesktopBannerCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
