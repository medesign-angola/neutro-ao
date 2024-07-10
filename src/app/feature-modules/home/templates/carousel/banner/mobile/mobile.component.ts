import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, NgZone, OnChanges, OnDestroy, OnInit, PLATFORM_ID, SimpleChanges, ViewChild, inject } from '@angular/core';
import { MobileBannerCarouselFunctionalities } from '@core/data/classes/mobile-banner-carousel.class';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';

const IMAGES_ELEMENT_INDEX = 0;
const CAROUSEL_SLIDER_INTERVAL = 2;

@Component({
  selector: 'app-mobile-banner-carousel',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileBannerCarouselComponent
extends MobileBannerCarouselFunctionalities
implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private ngZone: NgZone
  ) {
    super();
  }

  @Input() bannerItems: CarouselItemsModel[] = [];
  @Input() showArrows: boolean = false;
  @Input() automatic: boolean = false;
  @ViewChild('imagesContainerElement') imagesContainerElement!: ElementRef<HTMLElement>;

  carouselInterval: any;
  carouselRestartingTimeout: any;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.bannerItems.length > 0 && this.automatic){
      // this.startAutomatizedSliding();
    }
  }

  ngAfterViewInit(): void {
    this.imagesContainerElement.nativeElement;
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
    clearTimeout(this.carouselRestartingTimeout);
  }

  override next(){
    (this.activeIndex === this.bannerItems.length - 1) ? this.activeIndex = 0 : this.activeIndex++;
    this.scrollToActiveIndex(this.activeIndex);
    this.restartAutomatizedSlidingAfter();
  }

  override prev(){
    (this.activeIndex === 0) ? (this.activeIndex = this.bannerItems.length - 1) : this.activeIndex--;
    this.scrollToActiveIndex(this.activeIndex);
    this.restartAutomatizedSlidingAfter();
  }

  slideTo(index: number){
    this.activeIndex = index;
    this.scrollToActiveIndex(this.activeIndex);
    this.restartAutomatizedSlidingAfter();
  }
  
  scrollToActiveIndex(activeIndex: number){
    let imagesContainerElementChildrensAsHtmlElement = this.imagesContainerElement.nativeElement.childNodes[IMAGES_ELEMENT_INDEX] as HTMLElement;
    let getActiveItemByActiveIndexAsHtmlElement = imagesContainerElementChildrensAsHtmlElement.children[activeIndex] as HTMLElement;
    
    this.imagesContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft, 0);
  }

  startAutomatizedSliding(intervalTimerInSeconds: number = CAROUSEL_SLIDER_INTERVAL){
    if(!isPlatformBrowser(this.platformId)) return;

    // this.ngZone.runOutsideAngular(() => {
      this.carouselInterval = setInterval(() => {
        this.next();
      }, intervalTimerInSeconds * 1000);
    // });

  }

  restartAutomatizedSlidingAfter(timeoutTimerInSeconds: number = CAROUSEL_SLIDER_INTERVAL){

    if(!isPlatformBrowser(this.platformId)) return;
    clearInterval(this.carouselInterval);
    clearTimeout(this.carouselRestartingTimeout);

    this.carouselRestartingTimeout = setTimeout(() => {
      if(this.automatic)
        this.startAutomatizedSliding();
    }, timeoutTimerInSeconds * 1000)
  }

  stopAutomatizedSliding(){
    clearInterval(this.carouselInterval);
  }

}
