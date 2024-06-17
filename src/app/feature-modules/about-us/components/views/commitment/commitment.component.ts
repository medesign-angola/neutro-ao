import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductContainerCarouselFuncionalities } from '@core/data/classes/product-container-carousel.class';

const ITEMS_CONTAINER_INDEX = 0;

@Component({
  selector: 'app-commitment',
  templateUrl: './commitment.component.html',
  styleUrl: './commitment.component.css'
})
export class CommitmentComponent
extends ProductContainerCarouselFuncionalities
implements OnInit,AfterViewInit{
  itemsArray = [1, 2 ,3];
  @ViewChild('itemsContainerElement') itemsContainerElement!: ElementRef<HTMLElement>;
  @ViewChild('titleSectionElementRef') titleSectionElementRef!: ElementRef<HTMLElement>;
  paddingX: number = 0;
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ){
    super();
  }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    this.itemsContainerElement.nativeElement;
    this.paddingX = this.titleSectionElementRef.nativeElement.offsetLeft;
    this.changeDetectorRef.detectChanges();
  }

  override next(){
    if(this.activeIndex === this.itemsArray.length - 1){
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
    let itemsContainerElementChildrensAsHtmlElement = this.itemsContainerElement.nativeElement.childNodes[ITEMS_CONTAINER_INDEX] as HTMLElement;
    let getActiveItemByActiveIndexAsHtmlElement = itemsContainerElementChildrensAsHtmlElement.children[activeIndex] as HTMLElement;
    // console.log(getActiveItemByActiveIndexAsHtmlElement.offsetLeft);
    this.itemsContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft - this.paddingX, 0);
    // this.itemsContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft, 0);
  }

}
