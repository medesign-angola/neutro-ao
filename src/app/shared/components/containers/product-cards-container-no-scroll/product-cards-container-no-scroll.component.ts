import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '@core/data/models/product.model';
import { ProductCardSizeEnum } from '@shared/enum/product-card-size.enum';

@Component({
  selector: 'app-product-cards-container-no-scroll',
  templateUrl: './product-cards-container-no-scroll.component.html',
  styleUrl: './product-cards-container-no-scroll.component.css'
})
export class ProductCardsContainerNoScrollComponent implements OnInit, OnChanges {
  @Input() productsArray: Product[] = [];
  @Input() paddingX: number = 0;
  productCardSizeEnum = ProductCardSizeEnum;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
