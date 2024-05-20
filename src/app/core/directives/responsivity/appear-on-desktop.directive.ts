import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ScreenService } from '@core/services/screen/screen.service';
import { XL_SCREEN_SIZE } from './appear-on-mobile.directive';

@Directive({
  selector: '[appAppearOnDesktop]',
  standalone: true
})
export class AppearOnDesktopDirective implements OnInit {

  constructor(
    private screenService: ScreenService
  ) {}

  @Output() appearOnlyOnDesktop: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  @HostListener('window:resize', ['$event']) public onResize(event: any){
    if(event.target.innerWidth >= XL_SCREEN_SIZE){
      this.appearOnlyOnDesktop.emit(true);
    }else{
      this.appearOnlyOnDesktop.emit(false);
    }
  }

  ngOnInit(): void {
    if(this.screenService.dimentions && this.screenService.dimentions.width >= XL_SCREEN_SIZE){
      this.appearOnlyOnDesktop.emit(true);
    }else{
      this.appearOnlyOnDesktop.emit(false);
    }
  }

}
