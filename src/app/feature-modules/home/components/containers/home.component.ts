import { Component } from '@angular/core';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bannerItems: CarouselItemsModel[] = [
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
    {
      imagePath: 'assets/images/home/banner/img-6.png',
    },
  ];
}
