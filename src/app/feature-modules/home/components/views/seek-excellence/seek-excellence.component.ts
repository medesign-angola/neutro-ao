import { Component } from '@angular/core';
import { ImagePath } from '@core/data/models/image-path.model';

@Component({
  selector: 'app-seek-excellence',
  templateUrl: './seek-excellence.component.html',
  styleUrl: './seek-excellence.component.css'
})
export class SeekExcellenceComponent {
  activeIndex: number = 0;
  activeBiggerIndexItem: number = 0;

  productDetailed: { product: string, images: ImagePath[] }[] = [
    {
      product: 't-shirt',
      images: [
        {
          genericPath: 'assets/images/home/we-seek-excellence/image-1.png',
          allSizes: {
            '1536x1536': 'assets/images/home/we-seek-excellence/image-1.png',
            '1536x1536-height': 4096,
            '1536x1536-width': 1996,
            '2048x2048': 'assets/images/home/we-seek-excellence/image-1.png',
            '2048x2048-height': 4096,
            '2048x2048-width': 1996,
            large: 'assets/images/home/we-seek-excellence/image-1.png',
            'large-height': 4096,
            'large-width': 1996,
            medium: 'assets/images/home/we-seek-excellence/image-1.png',
            'medium-height': 4096,
            'medium-width': 1996,
            medium_large: 'assets/images/home/we-seek-excellence/image-1.png',
            'medium_large-height': 4096,
            'medium_large-width': 1996,
            thumbnail: 'assets/images/home/we-seek-excellence/image-1.png',
            'thumbnail-height': 4096,
            'thumbnail-width': 1996
          }
        },
        {
          genericPath: 'assets/images/home/we-seek-excellence/image-2.png',
          allSizes: {
            '1536x1536': 'assets/images/home/we-seek-excellence/image-2.png',
            '1536x1536-height': 4096,
            '1536x1536-width': 1785,
            '2048x2048': 'assets/images/home/we-seek-excellence/image-2.png',
            '2048x2048-height': 4096,
            '2048x2048-width': 1785,
            large: 'assets/images/home/we-seek-excellence/image-2.png',
            'large-height': 4096,
            'large-width': 1785,
            medium: 'assets/images/home/we-seek-excellence/image-2.png',
            'medium-height': 4096,
            'medium-width': 1785,
            medium_large: 'assets/images/home/we-seek-excellence/image-2.png',
            'medium_large-height': 4096,
            'medium_large-width': 1785,
            thumbnail: 'assets/images/home/we-seek-excellence/image-2.png',
            'thumbnail-height': 4096,
            'thumbnail-width': 1785
          }
        },
      ]
    },
    {
      product: 'short',
      images: [
        {
          genericPath: 'assets/images/home/we-seek-excellence/image-3.png',
          allSizes: {
            '1536x1536': 'assets/images/home/we-seek-excellence/image-3.png',
            '1536x1536-height': 2860,
            '1536x1536-width': 2472,
            '2048x2048': 'assets/images/home/we-seek-excellence/image-3.png',
            '2048x2048-height': 2860,
            '2048x2048-width': 2472,
            large: 'assets/images/home/we-seek-excellence/image-3.png',
            'large-height': 2860,
            'large-width': 2472,
            medium: 'assets/images/home/we-seek-excellence/image-3.png',
            'medium-height': 2860,
            'medium-width': 2472,
            medium_large: 'assets/images/home/we-seek-excellence/image-3.png',
            'medium_large-height': 2860,
            'medium_large-width': 2472,
            thumbnail: 'assets/images/home/we-seek-excellence/image-3.png',
            'thumbnail-height': 2860,
            'thumbnail-width': 2472
          }
        },
        {
          genericPath: 'assets/images/home/we-seek-excellence/image-4.png',
          allSizes: {
            '1536x1536': 'assets/images/home/we-seek-excellence/image-4.png',
            '1536x1536-height': 3392,
            '1536x1536-width': 3184,
            '2048x2048': 'assets/images/home/we-seek-excellence/image-4.png',
            '2048x2048-height': 3392,
            '2048x2048-width': 3184,
            large: 'assets/images/home/we-seek-excellence/image-4.png',
            'large-height': 3392,
            'large-width': 3184,
            medium: 'assets/images/home/we-seek-excellence/image-4.png',
            'medium-height': 3392,
            'medium-width': 3184,
            medium_large: 'assets/images/home/we-seek-excellence/image-4.png',
            'medium_large-height': 3392,
            'medium_large-width': 3184,
            thumbnail: 'assets/images/home/we-seek-excellence/image-4.png',
            'thumbnail-height': 3392,
            'thumbnail-width': 3184
          }
        },
      ]
    }
  ];

  showImage(index: number){
    this.activeIndex = index;
  }

  changeProduct(index: number){
    this.activeBiggerIndexItem = index;
  }

  prev(){
    if(this.activeBiggerIndexItem === 0){
      return;
    }else{
      this.activeBiggerIndexItem--;
    }
    this.showImage(0);
  }

  next(){
    if(this.activeBiggerIndexItem === this.productDetailed[this.activeBiggerIndexItem].images.length - 1){
      return;
    }else{
      this.activeBiggerIndexItem++;
    }
    this.showImage(0);
  }

}
