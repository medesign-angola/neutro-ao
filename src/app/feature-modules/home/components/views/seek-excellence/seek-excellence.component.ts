import { Component } from '@angular/core';
import { ImagePath } from '@core/data/models/image-path.model';

@Component({
  selector: 'app-seek-excellence',
  templateUrl: './seek-excellence.component.html',
  styleUrl: './seek-excellence.component.css'
})
export class SeekExcellenceComponent {

  images: ImagePath[] = [
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
  ];
  activeIndex: number = 0;

  showImage(index: number){
    this.activeIndex = index;
  }

  prev(){
    if(this.activeIndex === 0){
      return;
    }else{
      this.activeIndex--;
    }
    this.showImage(this.activeIndex);
  }

  next(){
    if(this.activeIndex === this.images.length - 1){
      return;
    }else{
      this.activeIndex++;
    }
    this.showImage(this.activeIndex);
  }

}
