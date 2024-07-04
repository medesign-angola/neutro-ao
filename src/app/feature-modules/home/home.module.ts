import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/containers/home.component';
import { BannerComponent } from './components/views/banner/banner.component';
import { MobileBannerCarouselComponent } from './templates/carousel/banner/mobile/mobile.component';
import { DesktopBannerCarouselComponent } from './templates/carousel/banner/desktop/desktop.component';
import { WindowFocusDirective } from './directives/carousel/window-focus.directive';
import { AppearOnMobileDirective } from '@core/directives/responsivity/appear-on-mobile.directive';
import { AppearOnDesktopDirective } from '@core/directives/responsivity/appear-on-desktop.directive';
import { SharedModule } from '@shared/shared.module';
import { BestSellerComponent } from './components/views/best-seller/best-seller.component';
import { MediaComponent } from './components/views/media/media.component';
import { NewDimensionComponent } from './components/views/new-dimension/new-dimension.component';
import { ProductsComponent } from './components/views/products/products.component';
import { SeekExcellenceComponent } from './components/views/seek-excellence/seek-excellence.component';
import { ShareMomentsComponent } from './components/views/share-moments/share-moments.component';
import { GenderTranslationPipe } from '../products/pipes/gender-translation.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    MobileBannerCarouselComponent,
    DesktopBannerCarouselComponent,
    WindowFocusDirective,
    BestSellerComponent,
    MediaComponent,
    NewDimensionComponent,
    ProductsComponent,
    SeekExcellenceComponent,
    ShareMomentsComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    AppearOnMobileDirective,
    AppearOnDesktopDirective,
    NgOptimizedImage,
    GenderTranslationPipe
  ]
})
export class HomeModule { }
