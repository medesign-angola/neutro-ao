import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardsContainerWithScrollComponent } from './components/containers/product-cards-container-with-scroll/product-cards-container-with-scroll.component';
import { ProductCardsContainerNoScrollComponent } from './components/containers/product-cards-container-no-scroll/product-cards-container-no-scroll.component';
import { ProductCardComponent } from './components/views/product-card/product-card.component';
import { ImageCarouselComponent } from './components/views/product-card/image-carousel/image-carousel.component';
import { ReplaceByPipe } from './pipes/replace-by.pipe';

@NgModule({
  declarations: [
    ProductCardsContainerWithScrollComponent,
    ProductCardsContainerNoScrollComponent,
    ProductCardComponent,
    ImageCarouselComponent,
    ReplaceByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ProductCardsContainerWithScrollComponent,
    ProductCardsContainerNoScrollComponent,
    ReplaceByPipe
  ]
})
export class SharedModule { }
