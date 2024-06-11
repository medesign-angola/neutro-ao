import { Component, ElementRef, Inject, Input, NgZone, OnChanges, OnDestroy, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { MobileBannerCarouselFunctionalities } from '@core/data/classes/mobile-banner-carousel.class';
import { colorRepresentionalImage, productColor } from '@core/data/models/product.model';

const IMAGES_ELEMENT_INDEX = 0;

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.css'
})
export class ProductImagesComponent
extends MobileBannerCarouselFunctionalities
implements OnInit, OnChanges, OnDestroy {

  @Input() productImagesFromColors: productColor[] = [];
  productImages: colorRepresentionalImage[] = [];
  
  @Input() showArrows: boolean = true;

  @ViewChild('imagesContainerElement') imagesContainerElement!: ElementRef<HTMLElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private ngZone: NgZone
  ) {
    super();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.combineImages();
  }

  ngOnDestroy(): void {
    
  }

  combineImages(){
    this.productImages = [];
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
    let imagesContainerElementChildrensAsHtmlElement = this.imagesContainerElement.nativeElement.childNodes[IMAGES_ELEMENT_INDEX] as HTMLElement;
    let getActiveItemByActiveIndexAsHtmlElement = imagesContainerElementChildrensAsHtmlElement.children[activeIndex] as HTMLElement;
    
    this.imagesContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft, 0);
  }

}
