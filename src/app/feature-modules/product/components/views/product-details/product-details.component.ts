import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product, colorRepresentionalImage, productColor, productSize } from '@core/data/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() theProduct!: Product;
  activeColor: number = 0;
  imagesArrayOfActiveColor: productColor[] = [];

  selectedSizes: productSize[] = [];
  quantitiesPerSelection: { size: productSize, quantity: number }[] = [];

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
    this.imagesArrayOfActiveColor = [];
    this.fullfillImagesArrayOfActiveColor();
  }

  fullfillImagesArrayOfActiveColor(){
    this.imagesArrayOfActiveColor = [ this.theProduct.colors[this.activeColor] ];
  }

  selectSizeIfNotExists(size: productSize){
    let sizeIndex = this.getTheIndex(size, true);
    if(sizeIndex !== -1){
      this.selectedSizes.splice(sizeIndex, 1);
      let theQuantitySpecification = this.quantitiesPerSelection.findIndex(item => item.size.name === size.name);
      this.quantitiesPerSelection.splice(theQuantitySpecification, 1);
      return;
    }
    this.selectedSizes.push(size);
    this.quantitiesPerSelection.push({ size: size, quantity: 1 });
  }

  getTheIndex(size: productSize, returnNumber: boolean = false): number{
    let index = this.selectedSizes.findIndex(sizeItem => sizeItem.name === size.name);
    return index;
  }

  increaseQuantity(itemIndex: number){
    this.quantitiesPerSelection[itemIndex].quantity++;
  }

  decreaseQuantity(itemIndex: number){
    if(this.quantitiesPerSelection[itemIndex].quantity === 1) return;
    this.quantitiesPerSelection[itemIndex].quantity--;
  }

  selectTab(index: number){
    if(this.activeTab === index){
      this.activeTab = -1;
      return;
    }

    this.activeTab = index;
    this.openTab(index);
  }

  openTab(index: number){
    let TAB_BODY_INDEX = 1;
    let PARAGRAPH_OF_TAB_BODY_INDEX = 0;
    let tabBodyElement = this.tabContainerElementRef.nativeElement.children[index].children[TAB_BODY_INDEX] as HTMLElement;

    this.activeTabBodyHeight = tabBodyElement.children[PARAGRAPH_OF_TAB_BODY_INDEX].clientHeight;
  }
  
}
