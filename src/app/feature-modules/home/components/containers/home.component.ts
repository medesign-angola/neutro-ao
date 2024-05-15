import { Component } from '@angular/core';
import { BannerItemsModel } from '@core/data/models/banner-items.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bannerItems: BannerItemsModel[] = [
    {
      imagePath: 'assets/images/home/banner/img-1.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-2.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-3.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-4.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-5.png',
    },
  ];
}
