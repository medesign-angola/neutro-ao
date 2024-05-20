import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScreenService{

    constructor(
        @Inject(PLATFORM_ID) private platformId: any
    ) {}

    get dimentions(): { width: number, height: number } | undefined{
        if(!isPlatformBrowser(this.platformId)) return;
        return { width: window.screen.width, height: window.screen.height }
    }

}