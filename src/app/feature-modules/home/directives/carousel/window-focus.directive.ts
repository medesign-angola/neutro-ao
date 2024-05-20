import { Directive, HostListener } from '@angular/core';
import { CarouselService } from '@core/services/carousel/carousel.service';

@Directive({
  selector: '[appWindowFocus]'
})
export class WindowFocusDirective {

  constructor(
    private carouselService: CarouselService
  ) { }

  @HostListener('window:focus') public onWindowFocus(){
    // console.log("focou outra vez no site, pode recomeçar o slide.");
    // this.carouselService.startChanging();
  }

  @HostListener('window:blur') public onWindowBlur(){
    // console.log("desfocou da janela, tem que parar");
    // this.carouselService.stopChanging();
  }

}
