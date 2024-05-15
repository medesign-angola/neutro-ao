import { Component, Input, OnInit } from '@angular/core';
import { BannerItemsModel } from '@core/data/models/banner-items.model';

@Component({
  selector: 'app-desktop-banner-carousel',
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopBannerCarouselComponent implements OnInit {

  @Input() bannerItems: BannerItemsModel[] = [];
  @Input() automatic: boolean = false;
  evenItems: BannerItemsModel[] = [];
  oddItems: BannerItemsModel[] = [];

  activeIndex: number = 0;

  ngOnInit(): void {
    this.evenItems = this.evenIndexItems();
    this.oddItems = this.oddIndexItems();
    this.startChangingItems();
  }

  slideTo(index: number){}

  evenIndexItems(): BannerItemsModel[]{
    return this.bannerItems.filter((item, index) => index % 2 === 0);
  }

  oddIndexItems(): BannerItemsModel[]{
    return this.bannerItems.filter((item, index) => index % 2 !== 0);
  }

  startChangingItems(){
    
  }

}
