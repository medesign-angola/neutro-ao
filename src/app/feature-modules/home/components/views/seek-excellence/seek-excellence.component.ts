import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ImagePath } from '@core/data/models/image-path.model';

@Component({
  selector: 'app-seek-excellence',
  templateUrl: './seek-excellence.component.html',
  styleUrl: './seek-excellence.component.css'
})
export class SeekExcellenceComponent implements OnInit {
  activeIndex: number = 0;
  activeBiggerIndexItem: number = 0;

  private changeDetectorRef = inject(ChangeDetectorRef);

  theActiveProduct!: { product: string, images: ImagePath[] };

  productDetailed: { product: string, images: ImagePath[] }[] = [
    {
      product: 't-shirt',
      images: [
        {
          genericPath: "https://neutro-ao.neutro.co.ao/wp-content/uploads/2024/07/male-tshirt-1.png",
        },
        {
          genericPath: "https://neutro-ao.neutro.co.ao/wp-content/uploads/2024/07/male-tshirt-2.png",
        },
      ]
    },
    {
      product: 'short',
      images: [
        {
          genericPath: "https://neutro-ao.neutro.co.ao/wp-content/uploads/2024/07/male-short-1.png",
        },
        {
          genericPath: "https://neutro-ao.neutro.co.ao/wp-content/uploads/2024/07/male-short-2.png",
        },
      ]
    }
  ];

  ngOnInit(): void {
    this.activeProduct();
  }

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
      this.activeProduct();
    }

    this.showImage(0);
  }

  next(){
    if(this.activeBiggerIndexItem === this.productDetailed.length - 1){
      return;
    }else{
      this.activeBiggerIndexItem++;
      this.activeProduct();
    }
    this.showImage(0);
  }

  activeProduct(){
    this.theActiveProduct = this.productDetailed[this.activeBiggerIndexItem]
    this.changeDetectorRef.detectChanges();
  }

}
