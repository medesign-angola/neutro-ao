import { Component, Input } from '@angular/core';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerItems: CarouselItemsModel[] = [];
}
