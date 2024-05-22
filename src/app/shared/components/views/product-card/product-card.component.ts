import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '@core/data/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() product!: Product;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  addShoppingCart(product: Product){}

}
