import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild, WritableSignal, signal } from '@angular/core';
import { Product } from '@core/data/models/product.model';
import { OrderByEnum } from '../../../enums/order-by.enum';
import { isPlatformBrowser } from '@angular/common';
import { ModalSupporter } from '@core/data/classes/modal.class';

interface OrderByModel{
  order: string,
  ref: OrderByEnum
}

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent
extends ModalSupporter
implements OnInit, OnChanges, AfterViewInit {
  
  @ViewChild('limitedContainerElementRef') limitedContainerElementRef!:ElementRef<HTMLElement>;
  scrollerPaddingX: number = 0;

  @Input() productsArray: Product[] = [];
  displayableProducts:Product[]= [];

  activeOrderByIndex: number = 0;
  orderOptions: OrderByModel[] = [
    {
      order: 'Mais Recentes',
      ref: OrderByEnum.MOST_RECENT
    },
    {
      order: 'A-Z',
      ref: OrderByEnum.ALPHABET
    }
  ];

  showOrderModal: WritableSignal<boolean> = signal(false);
  showFilterModal: WritableSignal<boolean> = signal(false);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any
  ){
    super();
  }
  
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.orderBy(0);
  }

  ngAfterViewInit(): void {
    this.scrollerPaddingX = this.limitedContainerElementRef.nativeElement.offsetLeft;
    this.changeDetectorRef.detectChanges();
  }

  orderBy(orderIndex: number){
    this.activeOrderByIndex = orderIndex;

    switch(this.orderOptions[orderIndex].ref){
      case OrderByEnum.MOST_RECENT:
        this.displayableProducts = this.productsArray;
        break;
      case OrderByEnum.ALPHABET:
        this.displayableProducts = this.productsArray;
        break;
      default:
        break;
    }

  }

  getTheActiveOrder(): OrderByModel | undefined{
    return this.orderOptions.find((item, index) => index === this.activeOrderByIndex);
  }

  openOrderModal(){
    this.showOrderModal.update(value => value = true);
    this.firstTimeOpeningModal.update(value => value = false);
    this.showModalBackground.update(value => value = true);
    this.toggleOverflowHiddenBodyElement(true);
  }

  closeOrderModal(){
    this.showOrderModal.update(value => value = false);
    this.showModalBackground.update(value => value = false);
    this.toggleOverflowHiddenBodyElement(false);
  }

  openFilterModal(){
    this.showFilterModal.update(value => value = true);
    this.firstTimeOpeningModal.update(value => value = false);
    this.showModalBackground.update(value => value = true);
    this.toggleOverflowHiddenBodyElement(true);
  }

  closeFilterModal(){
    this.showFilterModal.update(value => value = false);
    this.showModalBackground.update(value => value = false);
    this.toggleOverflowHiddenBodyElement(false);
  }

  override toggleOverflowHiddenBodyElement(value: boolean){
    if(!isPlatformBrowser(this.platformId)) return;
    let bodyElement = document.querySelector("body") as HTMLElement;
    
    if(value){
      bodyElement.style.height = '90vh';
      bodyElement.style.overflow = 'hidden';
    }else{
      bodyElement.style.height = 'auto';
      bodyElement.style.overflow = 'auto';
    }
  }

}
