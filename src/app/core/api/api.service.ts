import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID, TransferState, inject, makeStateKey } from "@angular/core";
import { PRODUCT_FIELDS } from "@core/data/constants/fields.contant";
import { Product, productCategory, productGenderEnum, ProductSlug } from "@core/data/models/product.model";
import { Transformer } from "@core/data/transformer/transformer.class";
import { Observable, map, of, tap } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class API{
    private http = inject(HttpClient);
    private transferState: TransferState = inject(TransferState);

    private allProductsDataTransferKey = makeStateKey<Product[]>('allProducts');
    private productBySlugTransferKey = makeStateKey<Product[]>('productBySlug');

    constructor(@Inject(PLATFORM_ID) private platformId: any){ }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${ environment.backoffice }/wp-json/wp/v2/produtos?${ PRODUCT_FIELDS }`)
                            .pipe(
                                map((incoming: any[]) => {
                                    let transformedProducts = Transformer.products(incoming);
                                    // this.transferState.set(this.allProductsDataTransferKey, transformedProducts);
                                    return transformedProducts;
                                }),
                            );
        // if(isPlatformServer(this.platformId)){
        //     return this.http.get<Product[]>(`${ environment.backoffice }/wp-json/wp/v2/produtos?${ PRODUCT_FIELDS }`)
        //                     .pipe(
        //                         map((incoming: any[]) => {
        //                             let transformedProducts = Transformer.products(incoming);
        //                             this.transferState.set(this.allProductsDataTransferKey, transformedProducts);
        //                             return transformedProducts;
        //                         }),
        //                     );
        // } else if(isPlatformBrowser(this.platformId)){
        //     return of(this.transferState.get<Product[]>(this.allProductsDataTransferKey, []));

        // } else {
        //     return of([]);
        // }
    }

    productBySlug(productSlug: string): Observable<Product[]>{
        return this.http.get<Product[]>(`${ environment.backoffice }/wp-json/wp/v2/produtos?slug=${ productSlug }&${ PRODUCT_FIELDS }`)
                            .pipe(
                                map((incoming: any[]) => {
                                    let transformedProducts = Transformer.products(incoming);
                                    // this.transferState.set(this.productBySlugTransferKey, transformedProducts);
                                    return transformedProducts;
                                }),
                            );
        
        // if(isPlatformServer(this.platformId)){

        //     return this.http.get<Product[]>(`${ environment.backoffice }/wp-json/wp/v2/produtos?slug=${ productSlug }&${ PRODUCT_FIELDS }`)
        //                     .pipe(
        //                         map((incoming: any[]) => {
        //                             let transformedProducts = Transformer.products(incoming);
        //                             this.transferState.set(this.productBySlugTransferKey, transformedProducts);
        //                             return transformedProducts;
        //                         }),
        //                     );

        // } else if(isPlatformBrowser(this.platformId)){
        //     console.log(this.transferState.get<Product[]>(this.productBySlugTransferKey, []))
        //     return of(this.transferState.get<Product[]>(this.productBySlugTransferKey, []));
        // } else {
        //     return of([]);
        // }
    }

    getCategories(): Observable<productCategory[]>{
        return this.http.get<productCategory[]>(`${ environment.backoffice }/wp-json/wp/v2/product-categories`);
    }

    getGenders(): Observable<productGenderEnum[]>{
        return this.http.get<productGenderEnum[]>(`${ environment.backoffice }/wp-json/wp/v2/product-genres`)
                        .pipe(
                            map((incomingData: any[]) => {
                                return Transformer.genders(incomingData);
                            })
                        );
    }

    subscribe(subscriber: any){
        return this.http.post(`${environment.backoffice}/wp-json/newsletter/v2/subscribers?client_key=${environment.newsletter.clientKey}&client_secret=${environment.newsletter.clientSecret}`, subscriber);
    }

    contactUs(body: any): Observable<any>{
        return this.http.post(environment.contactApiUrl, body);
    }
}