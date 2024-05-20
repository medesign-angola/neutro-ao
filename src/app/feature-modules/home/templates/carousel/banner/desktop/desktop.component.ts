import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, OnChanges, OnDestroy, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';
import { CarouselService } from '@core/services/carousel/carousel.service';

const DELAY_ODD_CAROUSEL: number = 2;
const CAROUSEL_INTERVAL_IN_SECONDS: number = 5;

interface LocalCarouselItems{
  imagePath: string,
  alternativeDescription?: string,
  isActive: boolean,
  indexOnBannerItems: number
}

@Component({
  selector: 'app-desktop-banner-carousel',
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopBannerCarouselComponent implements OnInit, OnChanges, OnDestroy {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private carouselService: CarouselService
  ) {}

  @Input() bannerItems: CarouselItemsModel[] = [];
  @Input() automatic: boolean = false;
  // @Input() appWindowFocus!: boolean | undefined;
  evenItems: LocalCarouselItems[] = [];
  oddItems: LocalCarouselItems[] = [];

  activeIndexToDotIndicators: number = 1;

  carouselInterval: any;
  carouselTimeOut: any;

  ngOnInit(): void {

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.evenItems = this.evenIndexItems();
    this.oddItems = this.oddIndexItems();
    this.determineTheActiveItemAndStartChanging(this.evenItems);
    this.determineTheActiveItemAndStartChanging(this.oddItems, DELAY_ODD_CAROUSEL);
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
    clearTimeout(this.carouselTimeOut);
  }

  slideTo(index: number){
    // identificar se é par ou ímpar
    // Colocar falso em todos os itens activos do grupo pertencente
    // colocar activo o item em questão.
    // Parar a troca automatica
  }

  // items com index par
  evenIndexItems(): LocalCarouselItems[]{
    let theItems: LocalCarouselItems[] = this.bannerItems.flatMap((item, index) => (
                                  {
                                    imagePath: item.imagePath,
                                    alternativeDescription: item.alternativeDescription,
                                    isActive: item.isActive ?? false,
                                    indexOnBannerItems: index
                                  }
                                ))
                                .filter((item, index) => item.indexOnBannerItems % 2 === 0)

    return theItems
  }

  // items com index ímpar
  oddIndexItems(): LocalCarouselItems[]{
    let theItems: LocalCarouselItems[] = this.bannerItems.flatMap((item, index) => (
                                  {
                                    imagePath: item.imagePath,
                                    alternativeDescription: item.alternativeDescription,
                                    isActive: item.isActive ?? false,
                                    indexOnBannerItems: index
                                  }
                                ))
                                .filter((item, index) => item.indexOnBannerItems % 2 !== 0)

    return theItems
  }

  determineTheActiveItemAndStartChanging(items: LocalCarouselItems[], delay: number = 0){
    if(items.findIndex(item => item.isActive) === -1){
      items.flatMap((item, index) => (index === 0) ? item.isActive = true : item.isActive = false );
    }
    this.startChangingAfter(items, delay);
  }

  startChangingAfter(items: LocalCarouselItems[], delay: number){
    
    if(!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      
      this.carouselInterval = setInterval(() => {
        let activeItemIndex = items.findIndex(item => item.isActive);
        this.goToNextItem(activeItemIndex, items);
      }, CAROUSEL_INTERVAL_IN_SECONDS * 1000);
    
    }, delay * 1000);
  }

  goToNextItem(activeIndex: number, itemsArray: LocalCarouselItems[]){
    // console.log(this.carouselService.ableToChange().getValue())
    // if(!this.carouselService.ableToChange().getValue()) return;
    itemsArray[activeIndex].isActive = false;
    (itemsArray[activeIndex + 1] !== undefined) ? itemsArray[activeIndex + 1].isActive = true : itemsArray[0].isActive = true;
    this.activeIndexToDotIndicators = this.getTheActiveItem(itemsArray).indexOnBannerItems ?? 0;
  }

  getTheActiveItem(itemArray: LocalCarouselItems[]): LocalCarouselItems{
    return (itemArray.filter(item => item.isActive))[0];
  }

}
