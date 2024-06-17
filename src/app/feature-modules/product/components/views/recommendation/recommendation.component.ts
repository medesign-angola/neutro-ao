import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Product } from '@core/data/models/product.model';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent implements OnInit, OnChanges, AfterViewInit {

  private changeDetectorRef = inject(ChangeDetectorRef);

  @Input() products: Product[] = [];
  
  @ViewChild('limitedContainerElementRef') limitedContainerElementRef!:ElementRef<HTMLElement>;
  scrollerPaddingX: number = 0;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    this.scrollerPaddingX = this.limitedContainerElementRef.nativeElement.offsetLeft;
    this.changeDetectorRef.detectChanges();
  }

}
