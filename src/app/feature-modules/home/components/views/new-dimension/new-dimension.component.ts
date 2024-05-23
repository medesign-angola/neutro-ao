import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { Product } from '@core/data/models/product.model';

@Component({
  selector: 'app-new-dimension',
  templateUrl: './new-dimension.component.html',
  styleUrl: './new-dimension.component.css'
})
export class NewDimensionComponent implements OnInit, AfterViewInit {
  @ViewChild('limitedContainerElementRef') limitedContainerElementRef!:ElementRef<HTMLElement>;
  scrollerPaddingX: number = 0;

  private changeDetectorRef = inject(ChangeDetectorRef);
  @Input() productsArray: Product[] = [];

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.scrollerPaddingX = this.limitedContainerElementRef.nativeElement.offsetLeft;
    this.changeDetectorRef.detectChanges();
  }

}
