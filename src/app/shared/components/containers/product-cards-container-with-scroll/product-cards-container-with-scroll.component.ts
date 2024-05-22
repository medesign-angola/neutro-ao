import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { ProductContainerCarouselFuncionalities } from '@core/data/classes/product-container-carousel.class';
import { Product } from '@core/data/models/product.model';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-product-cards-container-with-scroll',
  templateUrl: './product-cards-container-with-scroll.component.html',
  styleUrl: './product-cards-container-with-scroll.component.css'
})
export class ProductCardsContainerWithScrollComponent
extends ProductContainerCarouselFuncionalities
implements OnInit, OnChanges, AfterViewInit {
  @Input() productsArray: Product[] = [];
  @Input() paddingX: number = 0;

  constructor(){
    super();
  }

  @ViewChild('productContainerElement') productContainerElement!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    this.productContainerElement.nativeElement;
  }

  override next(){
    if(this.activeIndex === this.productsArray.length - 1){
      return;
    }else{
      this.activeIndex++;
    }
    this.scrollToActiveIndex(this.activeIndex);
  }

  override prev(){
    if(this.activeIndex === 0){
      return;
    }else { 
      this.activeIndex--;
    }
    this.scrollToActiveIndex(this.activeIndex);
  }

  slideTo(index: number){
    this.activeIndex = index;
    this.scrollToActiveIndex(this.activeIndex);
  }
  
  scrollToActiveIndex(activeIndex: number){
    let productContainerElementChildrensAsHtmlElement = this.productContainerElement.nativeElement.childNodes[0] as HTMLElement;
    let getActiveItemByActiveIndexAsHtmlElement = productContainerElementChildrensAsHtmlElement.children[activeIndex] as HTMLElement;
    this.productContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft - this.paddingX, 0);
  }
  
}
