import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { TestimonialImagesCarouselFuncionalities } from '@core/data/classes/testimonial-image-carousel.class';
import { Testimonial } from '@core/data/models/testimonial.model';

interface TestimonialWithPosition{
  position: number,
  originalIndex: number,
  testimonial: Testimonial
}

@Component({
  selector: 'app-testimonial-container',
  templateUrl: './testimonial-container.component.html',
  styleUrl: './testimonial-container.component.css'
})
export class TestimonialContainerComponent
extends TestimonialImagesCarouselFuncionalities
implements OnInit, OnChanges {

  @Input() testimonials: Testimonial[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any){
    super();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectActiveTestimonialData();
  }

  selectActiveTestimonialData(): Testimonial{
    return this.testimonials[this.activeIndex];
  }

  override next(){
    if(this.activeIndex === this.testimonials.length - 1) return;
    this.activeIndex++;
  }

  override prev(){
    if(this.activeIndex === 0) return;
    this.activeIndex--;
  }

  slideTo(index: number){
    this.activeIndex = index;
  }

}
