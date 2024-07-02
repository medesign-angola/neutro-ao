import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Unsubcriber } from '@core/Observables/unsubscriber.observable';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';
import { Product, productGenderEnum } from '@core/data/models/product.model';
import { ProductFacade } from '@core/facades/product.facade';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends Unsubcriber implements OnInit {

    private productFacade = inject(ProductFacade);

    bannerItems: CarouselItemsModel[] = [
        {
        imagePath: {
            genericPath: 'assets/images/home/banner/img-1.png',
            allSizes: {
                '1536x1536': 'assets/images/home/banner/img-1.png',
                '1536x1536-height': 876,
                '1536x1536-width': 516,
                '2048x2048': 'assets/images/home/banner/img-1.png',
                '2048x2048-height': 876,
                '2048x2048-width': 516,
                large: 'assets/images/home/banner/img-1.png',
                'large-height': 876,
                'large-width': 516,
                medium: 'assets/images/home/banner/img-1.png',
                'medium-height': 876,
                'medium-width': 516,
                medium_large: 'assets/images/home/banner/img-1.png',
                'medium_large-height': 876,
                'medium_large-width': 516,
                thumbnail: 'assets/images/home/banner/img-1.png',
                'thumbnail-height': 876,
                'thumbnail-width': 516
            }
        },
        },
        {
        imagePath: {
            genericPath: 'assets/images/home/banner/img-2.png',
            allSizes: {
                '1536x1536': 'assets/images/home/banner/img-2.png',
                '1536x1536-height': 876,
                '1536x1536-width': 516,
                '2048x2048': 'assets/images/home/banner/img-2.png',
                '2048x2048-height': 876,
                '2048x2048-width': 516,
                large: 'assets/images/home/banner/img-2.png',
                'large-height': 876,
                'large-width': 516,
                medium: 'assets/images/home/banner/img-2.png',
                'medium-height': 876,
                'medium-width': 516,
                medium_large: 'assets/images/home/banner/img-2.png',
                'medium_large-height': 876,
                'medium_large-width': 516,
                thumbnail: 'assets/images/home/banner/img-2.png',
                'thumbnail-height': 876,
                'thumbnail-width': 516
            }
        },
        },
        {
        imagePath: {
            genericPath: 'assets/images/home/banner/img-3.png',
            allSizes: {
                '1536x1536': 'assets/images/home/banner/img-3.png',
                '1536x1536-height': 876,
                '1536x1536-width': 441,
                '2048x2048': 'assets/images/home/banner/img-3.png',
                '2048x2048-height': 876,
                '2048x2048-width': 441,
                large: 'assets/images/home/banner/img-3.png',
                'large-height': 876,
                'large-width': 441,
                medium: 'assets/images/home/banner/img-3.png',
                'medium-height': 876,
                'medium-width': 441,
                medium_large: 'assets/images/home/banner/img-3.png',
                'medium_large-height': 876,
                'medium_large-width': 441,
                thumbnail: 'assets/images/home/banner/img-3.png',
                'thumbnail-height': 876,
                'thumbnail-width': 441
            }
        },
        },
        {
        imagePath: {
            genericPath: 'assets/images/home/banner/img-4.png',
            allSizes: {
                '1536x1536': 'assets/images/home/banner/img-4.png',
                '1536x1536-height': 900,
                '1536x1536-width': 545,
                '2048x2048': 'assets/images/home/banner/img-4.png',
                '2048x2048-height': 900,
                '2048x2048-width': 545,
                large: 'assets/images/home/banner/img-4.png',
                'large-height': 900,
                'large-width': 545,
                medium: 'assets/images/home/banner/img-4.png',
                'medium-height': 900,
                'medium-width': 545,
                medium_large: 'assets/images/home/banner/img-4.png',
                'medium_large-height': 900,
                'medium_large-width': 545,
                thumbnail: 'assets/images/home/banner/img-4.png',
                'thumbnail-height': 900,
                'thumbnail-width': 545
            }
        },
        },
        {
        imagePath: {
            genericPath: 'assets/images/home/banner/img-5.png',
            allSizes: {
                '1536x1536': 'assets/images/home/banner/img-5.png',
                '1536x1536-height': 900,
                '1536x1536-width': 521,
                '2048x2048': 'assets/images/home/banner/img-5.png',
                '2048x2048-height': 900,
                '2048x2048-width': 521,
                large: 'assets/images/home/banner/img-5.png',
                'large-height': 900,
                'large-width': 521,
                medium: 'assets/images/home/banner/img-5.png',
                'medium-height': 900,
                'medium-width': 521,
                medium_large: 'assets/images/home/banner/img-5.png',
                'medium_large-height': 900,
                'medium_large-width': 521,
                thumbnail: 'assets/images/home/banner/img-5.png',
                'thumbnail-height': 900,
                'thumbnail-width': 521
            }
        },
        },
        {
        imagePath: {
            genericPath: 'assets/images/home/banner/img-6.png',
            allSizes: {
                '1536x1536': 'assets/images/home/banner/img-6.png',
                '1536x1536-height': 876,
                '1536x1536-width': 427,
                '2048x2048': 'assets/images/home/banner/img-6.png',
                '2048x2048-height': 876,
                '2048x2048-width': 427,
                large: 'assets/images/home/banner/img-6.png',
                'large-height': 876,
                'large-width': 427,
                medium: 'assets/images/home/banner/img-6.png',
                'medium-height': 876,
                'medium-width': 427,
                medium_large: 'assets/images/home/banner/img-6.png',
                'medium_large-height': 876,
                'medium_large-width': 427,
                thumbnail: 'assets/images/home/banner/img-6.png',
                'thumbnail-height': 876,
                'thumbnail-width': 427
            }
        },
        },
    ];
    betterSaleHeadercategories: productGenderEnum[] = [];
    productsHeadercategories: productGenderEnum[] = [];

    betterSaleProducts: Product[] = [];

    highlightedProducts: Product[] = [];

    allProducts: Product[] = [];

    ngOnInit(): void {

        this.productFacade.all()
            .pipe(takeUntil(this.unsubcribe$))
            .subscribe({
                next: (incomingProducts) => {
                    this.betterSaleProducts = incomingProducts.filter(product => product.bestSeller === true);
                    this.highlightedProducts = incomingProducts.filter(product => product.highlighted === true);
                    this.allProducts = incomingProducts
                    
                    this.fullfillBetterSaleProductCategories();
                    this.fullfillAllProductsCategories();
                }
            });

    }

    fullfillBetterSaleProductCategories(){
        this.betterSaleProducts.forEach(product => {
        if(this.betterSaleHeadercategories.includes(product.gender)) return;
        this.betterSaleHeadercategories = [...this.betterSaleHeadercategories, product.gender];
        });
    }

    fullfillAllProductsCategories(){
        this.allProducts.forEach(product => {
        if(this.productsHeadercategories.includes(product.gender)) return;
        this.productsHeadercategories = [...this.productsHeadercategories, product.gender];
        });
    }

}
