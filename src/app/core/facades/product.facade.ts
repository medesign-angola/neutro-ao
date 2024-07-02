import { Injectable } from "@angular/core";
import { API } from "@core/api/api.service";
import { Product } from "@core/data/models/product.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductFacade{

    private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    constructor(private api: API){
        
    }

    all(): Observable<Product[]>{
        return this.api.getProducts();
    }

    productBySlug(productSlug: string): Observable<Product[]>{
        return this.api.productBySlug(productSlug);
    }

}