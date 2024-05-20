import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CarouselService{
    private changing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    
    ableToChange(): BehaviorSubject<boolean>{
        return this.changing$;
    }

    stopChanging(){
        this.changing$.next(false);
    }

    startChanging(){
        this.changing$.next(true);
    }
}