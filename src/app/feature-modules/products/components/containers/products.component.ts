import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Unsubcriber } from '@core/Observables/unsubscriber.observable';
import { Product, productCategory, productGenderEnum } from '@core/data/models/product.model';
import { Transformer } from '@core/data/transformer/transformer.class';
import { ProductFacade } from '@core/facades/product.facade';
import { map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent extends Unsubcriber implements OnInit {
    private productFacade = inject(ProductFacade);
    allProducts: Product[] = [];
    productCategories: productCategory[] = [];
    productGenders: productGenderEnum[] = [];
    private activatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        this.activatedRoute.queryParamMap.subscribe(queryParams => {
            this.productFacade.all()
                .pipe(
                    takeUntil(this.unsubcribe$),
                    map((incomingProducts: Product[]) => {
                        if(queryParams.keys.length > 0){
                            return this.filterProducts(incomingProducts, queryParams);
                        } else {
                            return incomingProducts;
                        }
                    })
                )
                .subscribe({
                    next: (incomingProducts: Product[]) => {
                        this.allProducts = incomingProducts;
                    }
                });
        });

        this.productFacade.categories().subscribe({
            next: (incomingCategories: productCategory[]) => {
                this.productCategories = incomingCategories;
            }
        });

        this.productFacade.genders().subscribe({
            next: ((incomingGenders: productGenderEnum[]) => {
                this.productGenders = incomingGenders;
            })
        });

    }

    filterProducts(products: Product[], queryParams: ParamMap): Product[]{
        let genders = queryParams.get('genders') ?? null;
        let categories = queryParams.get('categories') ?? null;
        let colors = queryParams.get('colors') ?? null;
        let sizes = queryParams.get('sizes') ?? null;
        let maxPrice = queryParams.get('max_price') ?? null;

        let filtered: Product[] = products;

        if (genders) {
            const genderArray = genders.split(',');
            filtered = filtered.filter(product => genderArray.includes(product.gender));
        }

        if (categories) {
            const categoryArray = categories.split(',');
            filtered = filtered.filter(product => product.categories.some(category => categoryArray.includes(category.slug)));
        }

        if (colors) {
            const colorArray = colors.split(',');
            filtered = filtered.filter(product => product.colors.some(color => colorArray.includes(Transformer.slugfy(color.name)) ));
        }

        if (sizes) {
            const sizeArray = sizes.split(',');
            filtered = filtered.filter(product => product.sizes.some(size => sizeArray.includes(Transformer.slugfy(size.name))));
        }

        if (maxPrice) {
            const maxPriceValue = parseFloat(maxPrice);
            filtered = filtered.filter(product => product.price <= maxPriceValue);
        }

        return filtered;
    }

}
