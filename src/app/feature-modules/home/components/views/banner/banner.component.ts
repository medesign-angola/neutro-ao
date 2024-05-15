import { Component, Input } from '@angular/core';
import { BannerItemsModel } from '@core/data/models/banner-items.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerItems: BannerItemsModel[] = [];
}
