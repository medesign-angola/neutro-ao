import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { XL_SCREEN_SIZE } from '@core/directives/responsivity/appear-on-mobile.directive';
import { ScreenService } from '@core/services/screen/screen.service';

const MD_SCREEN_SIZE: number = 768;

@Directive({
  selector: '[appProductImageSlideControllerAppearOnTablet]'
})
export class ProductImageSlideControllerAppearOnTabletDirective {

  constructor(
    private screenService: ScreenService
  ) {}

  @Output() appearOnlyFromTablet: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @HostListener('window:resize', ['$event']) public onResize(event: any){
    if(event.target.innerWidth >= MD_SCREEN_SIZE && event.target.innerWidth < XL_SCREEN_SIZE){
      this.appearOnlyFromTablet.emit(true);
    }else{
      this.appearOnlyFromTablet.emit(false);
    }
  }

  ngOnInit(): void {
    if(this.screenService.dimentions && (this.screenService.dimentions.width >= MD_SCREEN_SIZE && this.screenService.dimentions.width < XL_SCREEN_SIZE)){
      this.appearOnlyFromTablet.emit(true);
    }else{
      this.appearOnlyFromTablet.emit(false);
    }
  }

}
