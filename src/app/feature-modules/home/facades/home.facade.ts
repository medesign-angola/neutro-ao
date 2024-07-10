import { inject, Injectable } from "@angular/core";
import { API } from "@core/api/api.service";
import { CarouselItemsModel } from "@core/data/models/carousel-items.model";
import { Testimonial } from "@core/data/models/testimonial.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeFacade{

    private api = inject(API);

    getCovers(): Observable<CarouselItemsModel[]>{
        return this.api.getCovers();
    }

    getTestimonials(): Observable<Testimonial[]>{
        return this.api.getTestimonials();
    }
}