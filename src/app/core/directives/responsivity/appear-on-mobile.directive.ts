import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ScreenService } from '@core/services/screen/screen.service';

export const XL_SCREEN_SIZE: number = 1280;

@Directive({
  selector: '[appAppearOnMobile]',
  standalone: true
})
export class AppearOnMobileDirective implements OnInit {

  constructor(
    private screenService: ScreenService
  ) {}

  @Output() appearOnlyOnMobile: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  @HostListener('window:resize', ['$event']) public onResize(event: any){
    if(event.target.innerWidth < XL_SCREEN_SIZE){
      this.appearOnlyOnMobile.emit(true);
    }else{
      this.appearOnlyOnMobile.emit(false);
    }
  }

  ngOnInit(): void {
    if((this.screenService.dimentions) && (this.screenService.dimentions.width < XL_SCREEN_SIZE)){
      this.appearOnlyOnMobile.emit(true);
    }else{
      this.appearOnlyOnMobile.emit(false);
    }
  }

}
