import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Testimonial } from '@core/data/models/testimonial.model';

@Component({
  selector: 'app-share-moments',
  templateUrl: './share-moments.component.html',
  styleUrl: './share-moments.component.css'
})
export class ShareMomentsComponent implements OnInit, OnChanges {
  @Input() testimonials: Testimonial[] = [];

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
