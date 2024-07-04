import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Product } from '@core/data/models/product.model';
import { ShoppingBagService } from '@core/services/shopping-bag.service';
import { ProductCardSizeEnum } from '@shared/enum/product-card-size.enum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  @Input() controllerArrowsOnMobile: boolean = true;
  @Input() size: ProductCardSizeEnum = ProductCardSizeEnum.LARGE_ON_BOTH;
  productCardSizeEnum = ProductCardSizeEnum;

  private shoppingBag = inject(ShoppingBagService);
  activeColor: number = 0;
  selectedSize: number = 0;
  quantity: number = 1;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  addShoppingCart(product: Product){
    this.shoppingBag.addItem(product, { promotionalPrice: product.promotionalPrice > 0, selectedColorIndex: this.activeColor, selectedSize: this.selectedSize, quantity: this.quantity });
    this.product.isInShoppingBag = true;
  }

}
