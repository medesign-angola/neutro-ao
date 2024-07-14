import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { Params, QueryParamsHandling } from '@angular/router';
import { ProductContainerCarouselFuncionalities } from '@core/data/classes/product-container-carousel.class';
import { CardEdgeButton } from '@core/data/models/card-edge-button.model';
import { Product } from '@core/data/models/product.model';

const PRODUCTS_CONTAINER_INDEX = 0;
const LIMIT_OF_PRODUCTS_ON_SCROLL = 5;

@Component({
  selector: 'app-product-cards-container-with-scroll',
  templateUrl: './product-cards-container-with-scroll.component.html',
  styleUrl: './product-cards-container-with-scroll.component.css'
})
export class ProductCardsContainerWithScrollComponent
extends ProductContainerCarouselFuncionalities
implements OnInit, OnChanges, AfterViewInit {
  @Input() productsArray: Product[] = [];
  displayableProductsArray: Product[] = [];
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
    this.limitProductsLength(LIMIT_OF_PRODUCTS_ON_SCROLL);
  }

  ngAfterViewInit(): void {
    this.productContainerElement.nativeElement;
  }

  limitProductsLength(limit: number){
    for (let index = 0; index < limit; index++) {
      if(this.productsArray[index] == undefined) return;
      let theProductIndex = this.displayableProductsArray.findIndex(item => item.id === this.productsArray[index].id);
      if(theProductIndex < 0){
        this.displayableProductsArray.push(this.productsArray[index]);
      }
    }
  }

  override next(){
    if(this.activeIndex === this.displayableProductsArray.length - 1){
      if(this.displayableProductsArray.length < this.productsArray.length){
        if(this.cardEdgeButton.visible){
          this.incrementation = this.activeIndex + 1;
          this.scrollToActiveIndex(this.incrementation);
        }
        return;
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
        this.activeIndex = this.displayableProductsArray.length - 1;
        this.scrollToActiveIndex(this.activeIndex);
        this.incrementation = 0;
      }
      return;
    }else {
      if(this.cardEdgeButton.visible && this.incrementation != 0){
        this.activeIndex = this.displayableProductsArray.length - 1;
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
