import { Component, Input, OnChanges, OnInit, SimpleChanges, inject, signal } from '@angular/core';
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

  openCheckout = signal(false);

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  addShoppingCart(product: Product){
    this.shoppingBag.addItem(product, { promotionalPrice: product.promotionalPrice > 0, selectedColorIndex: this.activeColor, selectedSize: this.selectedSize, quantity: this.quantity });
    this.product.isInShoppingBag = true;
  }

  // removeProductFromShoppingCart(product: Product){
  //   this.shoppingBag.removeItem(product);
  //   product.isInShoppingBag = false;
    
  //   this.activeColor = 0;
  //   this.selectedSize = 0;
  // }

  
  changeActiveColor(index: number, product: Product){
    this.activeColor = index;
    this.addShoppingCart(product);
  }

  selectSize(index: number, product: Product){
    this.selectedSize = index;
    this.addShoppingCart(product);
  }

  openCheckoutSelection(){
    if(this.openCheckout() && this.product.isInShoppingBag){
      // this.removeProductFromShoppingCart(this.product);
      this.closeCheckoutSelection();

    } else if(this.openCheckout() && !this.product.isInShoppingBag){
      this.closeCheckoutSelection();
      
    } else {
      if(this.product.colors.length === 1 && this.product.sizes.length === 1){
        this.addShoppingCart(this.product);
        return;
      }
      this.openCheckout.update(val => val = true);
    }

  }

  closeCheckoutSelection(){
    this.openCheckout.update(val => val = false);
  }

}
