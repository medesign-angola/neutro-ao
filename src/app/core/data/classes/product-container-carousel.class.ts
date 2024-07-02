import { Directive, HostListener } from "@angular/core";

@Directive()

export class ProductContainerCarouselFuncionalities{

    private initialX: number | null = null;
    private initialY: number | null = null;
    activeIndex = 0;

    constructor() {}

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
            // $event.preventDefault();
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

    // @HostListener('wheel', ['$event'])
    // public carouselWheelEventHandler($event: WheelEvent) {
    //     this.initialX = $event.clientX;
    //     this.initialY = $event.clientY;

    //     if (this.initialX === null || this.initialY === null) return;

    //     var deltaX = $event.deltaX;
    //     var deltaY = $event.deltaY;

    //     if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //     // $event.preventDefault();
    //     if (deltaX > 0) {
    //         console.log("next")
    //         // this.next();
    //     } else {
    //         console.log("prev")
    //         // this.prev();
    //     }
    //     }

    //     this.initialX = null;
    //     this.initialY = null;
    // }
}