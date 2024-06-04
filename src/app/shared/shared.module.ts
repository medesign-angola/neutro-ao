import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductCardsContainerWithScrollComponent } from './components/containers/product-cards-container-with-scroll/product-cards-container-with-scroll.component';
import { ProductCardsContainerNoScrollComponent } from './components/containers/product-cards-container-no-scroll/product-cards-container-no-scroll.component';
import { ProductCardComponent } from './components/views/product-card/product-card.component';
import { ImageCarouselComponent } from './components/views/product-card/image-carousel/image-carousel.component';
import { ReplaceByPipe } from './pipes/replace-by.pipe';
import { TestimonialContainerComponent } from './components/containers/testimonial-container/testimonial-container.component';
import { ProductImageSlideControllerAppearOnTabletDirective } from './directives/product-image-slide-controller-appear-on-tablet.directive';

@NgModule({
  declarations: [
    ProductCardsContainerWithScrollComponent,
    ProductCardsContainerNoScrollComponent,
    ProductCardComponent,
    ImageCarouselComponent,
    ReplaceByPipe,
    TestimonialContainerComponent,
    ProductImageSlideControllerAppearOnTabletDirective
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    CommonModule,
    NgOptimizedImage,
    ProductCardsContainerWithScrollComponent,
    ProductCardsContainerNoScrollComponent,
    ReplaceByPipe,
    TestimonialContainerComponent
  ]
})
export class SharedModule { }
