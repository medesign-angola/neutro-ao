import { Component } from '@angular/core';

@Component({
  selector: 'app-seek-excellence',
  templateUrl: './seek-excellence.component.html',
  styleUrl: './seek-excellence.component.css'
})
export class SeekExcellenceComponent {

  images = [
    'assets/images/home/we-seek-excellence/image-1.png',
    'assets/images/home/we-seek-excellence/image-2.png',
    'assets/images/home/we-seek-excellence/image-1.png',
    'assets/images/home/we-seek-excellence/image-2.png',
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
