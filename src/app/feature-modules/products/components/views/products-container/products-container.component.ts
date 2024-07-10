import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild, WritableSignal, signal } from '@angular/core';
import { Product, productCategory, productColor, productGenderEnum, productSize } from '@core/data/models/product.model';
import { OrderByEnum } from '../../../enums/order-by.enum';
import { isPlatformBrowser } from '@angular/common';
import { ModalSupporter } from '@core/data/classes/modal.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Transformer } from '@core/data/transformer/transformer.class';

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
  selectedGenders: productGenderEnum[] = [];
  @Input() availableGenders: productGenderEnum[] = [
    productGenderEnum.MAN,
    productGenderEnum.WOMAN
  ]

    // Product Categories
  selectedCategories: productCategory[] = [];
  @Input() availableProductCategories: productCategory[] = [
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
  selectedColors: productColor[] = [];
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
  selectedSizes: productSize[] = [];
  availableProductSizes: productSize[] = [
    { name: 'XS', availableForColors: [] },
    { name: 'S', availableForColors: [] },
    { name: 'M', availableForColors: [] },
    { name: 'L', availableForColors: [] },
    { name: 'XL', availableForColors: [] },
    { name: 'XXL', availableForColors: [] },
  ];
  
    // Product Price Range
  minimumValue: number = 10000;
  maximumValue: number = 100000;
  priceRangeValue = signal(this.minimumValue);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
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
        this.displayableProducts = [...this.productsArray];
        break;
      case OrderByEnum.ALPHABET:
        this.displayableProducts.sort((a, b) => {
          if(a.name < b.name){
            return -1;
            
          } else if (a.name > b.name) {
            return 1;

          } else {
            return 0;
          }
        });
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

  // ############################################

  getTheGenderIndex(gender: productGenderEnum): number{
    let hasGender = this.selectedGenders.findIndex((item, index) => item === gender);
    return hasGender;
  }

  genderSelection(gender: productGenderEnum){
    let theIndex = this.getTheGenderIndex(gender);
    if(theIndex !== -1){
      this.removeSelectedGender(theIndex);
    } else {
      this.selectedGenders.push(gender);
    }
  }

  removeSelectedGender(genderIndex: number){
    this.selectedGenders.splice(genderIndex, 1);
  }

  
  // ############################################
  
  getTheCategoryIndex(category: productCategory): number{
    let hasCategory = this.selectedCategories.findIndex((item, index) => item.slug === category.slug);
    return hasCategory;
  }

  categorySelection(category: productCategory){
    let theIndex = this.getTheCategoryIndex(category);
    if(theIndex !== -1){
      this.removeSelectedCategory(theIndex);
    } else {
      this.selectedCategories.push(category);
    }
  }

  removeSelectedCategory(categoryIndex: number){
    this.selectedCategories.splice(categoryIndex, 1);
  }

  // ############################################
  
  getTheColorIndex(color: productColor): number{
    let hasColor = this.selectedColors.findIndex((item, index) => item.name === color.name);
    return hasColor;
  }

  colorSelection(color: productColor){
    let theIndex = this.getTheColorIndex(color);
    if(theIndex !== -1){
      this.removeSelectedColor(theIndex);
    } else {
      this.selectedColors.push(color);
    }
  }

  removeSelectedColor(colorIndex: number){
    this.selectedColors.splice(colorIndex, 1);
  }

  // ############################################
  
  getTheSizeIndex(size: productSize): number{
    let hasSize = this.selectedSizes.findIndex((item, index) => item.name === size.name);
    return hasSize;
  }

  sizeSelection(size: productSize){
    let theIndex = this.getTheSizeIndex(size);
    if(theIndex !== -1){
      this.removeSelectedSize(theIndex);
    } else {
      this.selectedSizes.push(size);
    }
  }

  removeSelectedSize(sizeIndex: number){
    this.selectedSizes.splice(sizeIndex, 1);
  }

  cancel(){
    this.selectedGenders = [];
    this.selectedCategories = [];
    this.selectedColors = [];
    this.selectedSizes = [];
    this.priceRangeValue.update(val => val = this.minimumValue);
  }

  apply(){
    let queryParams: any = {};

    if(this.selectedGenders.length > 0){
      queryParams.genders = this.selectedGenders.join(',')
    }
    if(this.selectedCategories.length > 0){
      queryParams.categories = this.selectedCategories.map(category => category.slug).join(',');
    }
    if(this.selectedColors.length > 0){
      queryParams.colors = this.selectedColors.map(color => Transformer.slugfy(color.name)).join(',');
    }
    if(this.selectedSizes.length > 0){
      queryParams.sizes = this.selectedSizes.map(size => Transformer.slugfy(size.name)).join(',');
    }
    if(this.priceRangeValue() > this.minimumValue){
      queryParams.max_price = this.priceRangeValue().toString();
    }

    if(!(Object.keys(queryParams).length > 0)){
      this.router.navigate(['/products']);
      
    } else {
      this.router.navigate(['/products'], {
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
    }
    
    this.closeFilterModal();

  }

}
