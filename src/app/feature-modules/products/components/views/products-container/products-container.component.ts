import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild, WritableSignal, signal } from '@angular/core';
import { Product, productCategory, productColor, productGenderEnum, productSize } from '@core/data/models/product.model';
import { OrderByEnum } from '../../../enums/order-by.enum';
import { isPlatformBrowser } from '@angular/common';
import { ModalSupporter } from '@core/data/classes/modal.class';

interface OrderBy{
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

  showOrderModal: WritableSignal<boolean> = signal(false);
  showFilterModal: WritableSignal<boolean> = signal(false);

  firstTimeOpeningOrderModal: WritableSignal<boolean> = signal(true);
  firstTimeOpeningFilterModal: WritableSignal<boolean> = signal(true);


  // Order
  activeOrderByIndex: number = 0;
  orderOptions: OrderBy[] = [
    {
      order: 'Mais Recentes',
      ref: OrderByEnum.MOST_RECENT
    },
    {
      order: 'A-Z',
      ref: OrderByEnum.ALPHABET
    }
  ];


  // filters
    // Gender
  selectedGender: number = -1;
  availableGenders: productGenderEnum[] = [
    productGenderEnum.MAN,
    productGenderEnum.WOMAN
  ]

    // Product Categories
  selectedCategoriesId: number[] = [];
  availableProductCategories: productCategory[] = [
    {
      name: 'Camiseta',
      slug: 'camisetas'
    },
    {
      name: 'Calção',
      slug: 'calcao'
    },
    {
      name: 'Underwear',
      slug: 'underwear'
    }
  ];

    // Product Colors
  selectedColorsId: number[] = [];
  availbaleProductColors: productColor[] = [
    {
      name: 'Preto',
      representationalImages: []
    },
    {
      name: 'Branco',
      representationalImages: []
    }
  ];

    // Product Sizes
  selectedSizesId: number[] = [];
  availableProductSizes: productSize[] = [
    { name: 'XS' },
    { name: 'S' },
    { name: 'M' },
    { name: 'L' },
    { name: 'XL' },
    { name: 'XXL' },
  ];
  
    // Product Price Range
  priceRangeValue = signal(0);

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

  getTheActiveOrder(): OrderBy | undefined{
    return this.orderOptions.find((item, index) => index === this.activeOrderByIndex);
  }

  openOrderModal(){
    this.showOrderModal.update(value => value = true);
    this.firstTimeOpeningOrderModal.update(value => value = false);
    this.toggleOverflowHiddenBodyElement(true);
  }


  closeOrderModal(){
    this.showOrderModal.update(value => value = false);
    this.toggleOverflowHiddenBodyElement(false);
  }

  toggleDesktopOrderModal(){
    this.showOrderModal.update(value => !value);
  }

  openDesktopOrderModal(){
    this.showOrderModal.update(value => value = true);
  }

  closeDesktopOrderModal(){
    this.showOrderModal.update(value => value = false);
  }

  openFilterModal(){
    this.showFilterModal.update(value => value = true);
    this.firstTimeOpeningFilterModal.update(value => value = false);
    this.toggleOverflowHiddenBodyElement(true);
  }

  closeFilterModal(){
    this.showFilterModal.update(value => value = false);
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
