import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Product, productGenderEnum } from '@core/data/models/product.model';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('limitedContainerElementRef') limitedContainerElementRef!:ElementRef<HTMLElement>;
    scrollerPaddingX: number = 0;

    private changeDetectorRef = inject(ChangeDetectorRef);
    @Input() productsArray: Product[] = [];
    @Input() betterSaleHeaderCategories: productGenderEnum[] = [];
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

    translatorFromSlug(item: productGenderEnum): string{
      switch(item){
        case productGenderEnum.MAN:
          return 'Homem';
        case productGenderEnum.WOMAN:
          return 'Mulher';
        default:
          return 'Outro';
      }
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
      return this.betterSaleHeaderCategories.find((item, index) => index === genderIndex);
    }

    getProductsFromGenderName(genderName: productGenderEnum): Product[]{
      return this.productsArray.filter(item => item.gender === genderName);
    }

}
