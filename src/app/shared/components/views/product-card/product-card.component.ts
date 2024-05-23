import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '@core/data/models/product.model';
import { ProductCardSizeEnum } from '@shared/enum/product-card-size.enum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  @Input() size: ProductCardSizeEnum = ProductCardSizeEnum.LARGE_ON_BOTH;
  productCardSizeEnum = ProductCardSizeEnum;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  addShoppingCart(product: Product){}

}
