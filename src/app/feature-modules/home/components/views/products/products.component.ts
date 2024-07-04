import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Product, productGenderEnum } from '@core/data/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('limitedContainerElementRef') limitedContainerElementRef!:ElementRef<HTMLElement>;
  scrollerPaddingX: number = 0;

  private changeDetectorRef = inject(ChangeDetectorRef);
  @Input() productsArray: Product[] = [];
  @Input() productsHeaderCategories: productGenderEnum[] = [];
  activeCategoryIndex: number = -1;
  displayableProducts:Product[]= [];

  ngOnInit(): void {
      
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterProducts(-1);
  }

  ngAfterViewInit(): void {
      this.scrollerPaddingX = this.limitedContainerElementRef.nativeElement.offsetLeft;
      this.changeDetectorRef.detectChanges();
  }

  select(index: number){
    this.activeCategoryIndex = index;
    this.filterProducts(this.activeCategoryIndex);
  }

  filterProducts(genderIndex?: number){
    this.displayableProducts = [];
    this.displayableProducts = (typeof(genderIndex) == 'undefined' || genderIndex === -1) ? this.productsArray : this.getProductsWithGender(genderIndex);
  }

  getProductsWithGender(genderIndex: number): Product[]{
    let genderName = this.getGenderNameByIndex(genderIndex);
    return (genderName) ? this.getProductsFromGenderName(genderName) : [];
  }

  getGenderNameByIndex(genderIndex: number): productGenderEnum | undefined{
    return this.productsHeaderCategories.find((item, index) => index === genderIndex);
  }

  getProductsFromGenderName(genderName: productGenderEnum): Product[]{
    return this.productsArray.filter(item => item.gender === genderName);
  }

}