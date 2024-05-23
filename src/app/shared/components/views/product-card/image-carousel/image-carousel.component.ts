import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { ProductImagesCarouselFuncionalities } from '@core/data/classes/product-image-carousel.class';
import { colorRepresentionalImage, productColor } from '@core/data/models/product.model';
import { ScreenService } from '@core/services/screen/screen.service';
import { ProductCardSizeEnum } from '@shared/enum/product-card-size.enum';

const IMAGES_SCROLLER_ELEMENT_INDEX = 0;

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent
extends ProductImagesCarouselFuncionalities
implements OnInit, OnChanges, AfterViewInit {

  @Input() productImagesFromColors: productColor[] = [];
  sizesEnum = ProductCardSizeEnum;
  @Input() size: ProductCardSizeEnum = ProductCardSizeEnum.LARGE_ON_BOTH;
  productImages: colorRepresentionalImage[] = [];

  screenService = inject(ScreenService);

  constructor(){
    super();
  }

  @ViewChild('imagesContainerElement') imagesContainerElement!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productImages = [];
    this.combineImages();
  }

  ngAfterViewInit(): void {
    this.imagesContainerElement.nativeElement;
  }

  combineImages(){
    this.productImagesFromColors.forEach(item => {
      this.productImages = [...this.productImages, ...item.representationalImages];
    });
  }

  override next(){
    (this.activeIndex === this.productImages.length - 1) ? this.activeIndex = 0 : this.activeIndex++;
    this.scrollToActiveIndex(this.activeIndex);
  }

  override prev(){
    (this.activeIndex === 0) ? (this.activeIndex = this.productImages.length - 1) : this.activeIndex--;
    this.scrollToActiveIndex(this.activeIndex);
  }

  slideTo(index: number){
    this.activeIndex = index;
    this.scrollToActiveIndex(this.activeIndex);
  }
  
  scrollToActiveIndex(activeIndex: number){
    let imagesContainerElementChildrensAsHtmlElement = this.imagesContainerElement.nativeElement.childNodes[IMAGES_SCROLLER_ELEMENT_INDEX] as HTMLElement;
    let getActiveItemByActiveIndexAsHtmlElement = imagesContainerElementChildrensAsHtmlElement.children[activeIndex] as HTMLElement;
    this.imagesContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft, 0);
  }

}
