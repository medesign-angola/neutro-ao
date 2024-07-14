import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { Params, QueryParamsHandling } from '@angular/router';
import { ProductContainerCarouselFuncionalities } from '@core/data/classes/product-container-carousel.class';
import { CardEdgeButton } from '@core/data/models/card-edge-button.model';
import { Product } from '@core/data/models/product.model';

const PRODUCTS_CONTAINER_INDEX = 0;

@Component({
  selector: 'app-product-cards-container-with-scroll',
  templateUrl: './product-cards-container-with-scroll.component.html',
  styleUrl: './product-cards-container-with-scroll.component.css'
})
export class ProductCardsContainerWithScrollComponent
extends ProductContainerCarouselFuncionalities
implements OnInit, OnChanges, AfterViewInit {
  @Input() productsArray: Product[] = [];
  @Input() cardEdgeButton: CardEdgeButton = { visible: false, routeTo: '' }
  @Input() paddingX: number = 0;

  private incrementation: number = 0;

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
      
      if(this.cardEdgeButton.visible){
        this.incrementation = this.activeIndex + 1;
        this.scrollToActiveIndex(this.incrementation);
      }
      return;

    }else{
      this.activeIndex++;
    }
    this.scrollToActiveIndex(this.activeIndex);
  }

  override prev(){
    if(this.activeIndex === 0){
      if(this.cardEdgeButton.visible && this.incrementation != 0){
        this.activeIndex = this.productsArray.length - 1;
        this.scrollToActiveIndex(this.activeIndex);
        this.incrementation = 0;
      }
      return;
    }else {
      if(this.cardEdgeButton.visible && this.incrementation != 0){
        this.activeIndex = this.productsArray.length - 1;
        this.scrollToActiveIndex(this.activeIndex);
        this.incrementation = 0;
        return;
      }
      this.activeIndex--;
      this.scrollToActiveIndex(this.activeIndex);
    }
  }

  slideTo(index: number){
    this.activeIndex = index;
    this.scrollToActiveIndex(this.activeIndex);
  }
  
  scrollToActiveIndex(activeIndex: number){
    let productContainerElementChildrensAsHtmlElement = this.productContainerElement.nativeElement.childNodes[PRODUCTS_CONTAINER_INDEX] as HTMLElement;
    let getActiveItemByActiveIndexAsHtmlElement = productContainerElementChildrensAsHtmlElement.children[activeIndex] as HTMLElement;

    if(!productContainerElementChildrensAsHtmlElement.children[activeIndex]) return;

    // console.log(getActiveItemByActiveIndexAsHtmlElement.offsetLeft);
    this.productContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft - this.paddingX, 0);
    // this.productContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft, 0);
  }
  
}
