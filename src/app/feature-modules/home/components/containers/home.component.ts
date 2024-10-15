import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Unsubcriber } from '@core/Observables/unsubscriber.observable';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';
import { Product, productGenderEnum } from '@core/data/models/product.model';
import { ProductFacade } from '@core/facades/product.facade';
import { takeUntil } from 'rxjs';
import { HomeFacade } from '../../facades/home.facade';
import { Testimonial } from '@core/data/models/testimonial.model';
import { MetaTagsService } from '@shared/services/meta/meta-tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends Unsubcriber implements OnInit {

    private productFacade = inject(ProductFacade);
    private homeFacade= inject(HomeFacade);
    private meta = inject(MetaTagsService);

    defaultImagesBanner: CarouselItemsModel[] = [];

    bannerItems: CarouselItemsModel[] = [];
    betterSaleHeadercategories: productGenderEnum[] = [];
    productsHeadercategories: productGenderEnum[] = [];

    betterSaleProducts: Product[] = [];

    highlightedProducts: Product[] = [];

    allProducts: Product[] = [];

    testimonials: Testimonial[] = [];

    ngOnInit(): void {

        this.productFacade.all()
            .pipe(takeUntil(this.unsubcribe$))
            .subscribe({
                next: (incomingProducts) => {
                    this.betterSaleProducts = incomingProducts.filter(product => product.bestSeller);
                    this.highlightedProducts = incomingProducts.filter(product => product.highlighted);
                    this.allProducts = incomingProducts
                    
                    this.fullfillBetterSaleProductCategories();
                    this.fullfillAllProductsCategories();
                }
            });
        
        this.homeFacade.getCovers()
            .pipe(takeUntil(this.unsubcribe$))
            .subscribe((incoming: CarouselItemsModel[]) => this.bannerItems = (incoming.length > 0) ? incoming : this.defaultImagesBanner)
        
        this.homeFacade.getTestimonials()
            .pipe(takeUntil(this.unsubcribe$))
            .subscribe((incoming: Testimonial[]) => this.testimonials = incoming)

        this.meta.addMetaTags({
            title: 'Neutro - It\'s about personality',
            description: 'Uma cultura que inspira você a viver de forma autêntica',
            image: 'assets/images/static/profile/profile.png',
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
