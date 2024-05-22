import { Directive, HostListener } from "@angular/core";

@Directive() // permit a normal class to use angular resources

export class MobileBannerCarouselFunctionalities{
    
    initialX = null;
    initialY = null;
    activeIndex = 0;

    next() {}
    prev() {}

    @HostListener('touchstart', ['$event'])
    public captureInitialXOnTouchStart($event: any){
        this.initialX = $event.touches[0].clientX;
        this.initialY = $event.touches[0].clientY;
    }

    @HostListener('touchmove', ['$event'])
    public carouselTouchMoveEventHandler($event: any){

        if(this.initialX === null || this.initialY === null) return;
        var currentX = $event.touches[0].clientX;
        var currentY = $event.touches[0].clientY;

        var deltaX = currentX - this.initialX;
        var deltaY = currentY - this.initialY;

        if(Math.abs(deltaX) > Math.abs(deltaY)){
            $event.preventDefault();
            if(deltaX < 0){
                this.next();
            }else{
                this.prev();
            }
        }

        this.initialX = null;
        this.initialY = null;

    }

    @HostListener('wheel', ['$event'])
    public carouselWheelEventHandler($event: any){
        this.initialX = $event.clientX;
        this.initialY = $event.clientY;
        
        if(this.initialX === null || this.initialY === null) return;

        var deltaX = $event.deltaX;
        var deltaY = $event.deltaY;

        if(Math.abs(deltaX) > Math.abs(deltaY)){
            $event.preventDefault();
            if(deltaX > 0){
                // this.next();
            }else{
                // this.prev();
            }
        }

        this.initialX = null;
        this.initialY = null;

    }

}