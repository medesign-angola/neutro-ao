import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unsubcriber } from '@core/Observables/unsubscriber.observable';
import { Product, productGenderEnum } from '@core/data/models/product.model';
import { ProductFacade } from '@core/facades/product.facade';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent extends Unsubcriber implements OnInit {
    private productFacade = inject(ProductFacade);
    private activatedRoute = inject(ActivatedRoute);

    invalidSlug = signal(false);
    notFoundProduct = signal(false);

    theProduct: Product[] = [];

    recommendations: Product[] = [];

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(param => {
            const slug = param['slug'];
            if(slug === null){ this.invalidSlug.update(val => val = true); return; };
            
            this.invalidSlug.update(val => val = false);
            this.productFacade.productBySlug(slug)
                .pipe(takeUntil(this.unsubcribe$))
                .subscribe({
                    next: (incomingProduct: Product[] | undefined) => {
                        if(incomingProduct === undefined){
                            this.invalidSlug.update(val => val = true);
                            return;
                        }
                        this.theProduct = incomingProduct;
                    }
                });

            this.productFacade
                .all()
                .pipe(takeUntil(this.unsubcribe$))
                .subscribe({
                    next: (incomingProducts: Product[]) => {
                        this.recommendations = incomingProducts.filter(item => item.slug !== slug);
                    }
                });
        })
    }
  
}
