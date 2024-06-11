import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '@core/data/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() theProduct!: Product;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  
}
