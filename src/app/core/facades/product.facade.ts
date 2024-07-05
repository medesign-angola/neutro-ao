import { Injectable } from "@angular/core";
import { API } from "@core/api/api.service";
import { Product, productCategory, productGenderEnum } from "@core/data/models/product.model";
import { BehaviorSubject, map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductFacade{

    private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    constructor(private api: API){
        
    }

    all(): Observable<Product[]>{
        if(this.products.getValue().length === 0)
            return this.api.getProducts()
            .pipe(
                map((incomingProducts: Product[]) => {
                    this.products.next(incomingProducts);
                    return incomingProducts;
                })
            );
        
        return this.products.asObservable();
    }

    productBySlug(productSlug: string): Observable<Product[] | undefined>{
        return this.all()
        .pipe(
            map((incomingProducts: Product[]) => {
                let theProduct = incomingProducts.filter(item => item.slug === productSlug);
                return theProduct;
            })
        )
    }

    categories(): Observable<productCategory[]>{
        return this.api.getCategories();
    }

    genders(): Observable<productGenderEnum[]>{
        return this.api.getGenders();
    }

}