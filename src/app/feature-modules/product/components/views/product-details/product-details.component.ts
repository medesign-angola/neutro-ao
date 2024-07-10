import { AfterViewInit, Component, ElementRef, inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product, colorRepresentionalImage, productColor, productSize } from '@core/data/models/product.model';
import { CheckoutOptions, ShoppingBagService } from '@core/services/shopping-bag.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() theProduct!: Product;
  activeColor: number = 0;
  imagesArrayOfActiveColor: productColor[] = [];

  private shoppingBag = inject(ShoppingBagService);

  // selectedSizes: productSize[] = [];
  selectedSize: number = -1;
  quantity: number = 1;
  // quantitiesPerSelection: { size: productSize, quantity: number }[] = [];

  @ViewChild('tabContainerElementRef') tabContainerElementRef!: ElementRef<HTMLElement>;

  activeTab: number = -1;
  activeTabBodyHeight: number = 0;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fullfillImagesArrayOfActiveColor();
  }

  ngAfterViewInit(): void {
    this.tabContainerElementRef.nativeElement;
  }

  changeActiveColor(index: number){
    this.activeColor = index;
    this.selectedSize = -1;
    this.imagesArrayOfActiveColor = [];
    this.fullfillImagesArrayOfActiveColor();
  }

  fullfillImagesArrayOfActiveColor(){
    this.imagesArrayOfActiveColor = [ this.theProduct.colors[this.activeColor] ];
  }

  selectSize(index: number){
    if(!this.isAvailableForActiveColor(this.theProduct.sizes[index])) return;
    this.selectedSize = index;
  }

  isAvailableForActiveColor(size: productSize): boolean{
    return size.availableForColors.includes(this.theProduct.colors[this.activeColor].name);
  }

  addOrEditProductToShoppingBag(product: Product){
    if(!(this.selectedSize > -1)) return;
    this.shoppingBag.addItem(product, { promotionalPrice: product.promotionalPrice > 0, selectedColorIndex: this.activeColor, selectedSize: this.selectedSize, quantity: this.quantity });
  }

  increaseQuantity(){
    this.quantity++;
  }

  decreaseQuantity(){
    this.quantity--;
  }

  selectTab(index: number){
    if(this.activeTab === index){
      this.activeTab = -1;
      return;
    }

    this.activeTab = index;
    this.openTab(index);
  }

  productIsOnShoppingBag(): boolean{
    return this.shoppingBagProductIndex(this.theProduct, { promotionalPrice: (this.theProduct.promotionalPrice > 0) ? true  : false, selectedColorIndex: this.activeColor, selectedSize: this.selectedSize, quantity: this.quantity}) > -1;
  }

  shoppingBagProductIndex(product: Product, options: CheckoutOptions ): number{
    return this.shoppingBag.shoppingBagProductIndex(product, options);
  }

  openTab(index: number){
    let TAB_BODY_INDEX = 1;
    let PARAGRAPH_OF_TAB_BODY_INDEX = 0;
    let tabBodyElement = this.tabContainerElementRef.nativeElement.children[index].children[TAB_BODY_INDEX] as HTMLElement;

    this.activeTabBodyHeight = tabBodyElement.children[PARAGRAPH_OF_TAB_BODY_INDEX].clientHeight;
  }
  
}
