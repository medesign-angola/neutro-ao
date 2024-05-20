import { Component, Input, signal } from '@angular/core';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerItems: CarouselItemsModel[] = [];

  showMobileBanner$ = signal(false);
  showDesktopBanner$ = signal(false);

  mobileBannerStatusEventHandler($event: any){
    this.showMobileBanner$.update(value => value = $event);
  }

  desktopBannerStatusEventHandler($event: any){
    this.showDesktopBanner$.update(value => value = $event);
  }

}
