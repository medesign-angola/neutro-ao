import { Component, OnInit, inject } from '@angular/core';
import { Unsubcriber } from '@core/Observables/unsubscriber.observable';
import { Product, productGenderEnum } from '@core/data/models/product.model';
import { ProductFacade } from '@core/facades/product.facade';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent extends Unsubcriber implements OnInit {
    private productFacade = inject(ProductFacade);
    allProducts: Product[] = [];

    ngOnInit(): void {
        this.productFacade.all()
            .pipe(takeUntil(this.unsubcribe$))
            .subscribe({
                next: (incomingProducts: Product[]) => {
                    this.allProducts = incomingProducts;
                }
            });
    }

}
