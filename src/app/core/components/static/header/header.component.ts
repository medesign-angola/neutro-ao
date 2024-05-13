import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { HeaderItemsModel } from '@core/data/models/header-items.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  @Input() headerItems: HeaderItemsModel[] = [];

  isMenuOpen: boolean = false;

  openMenu(){
    this.isMenuOpen = true;
    this.overflowBodyElement();
  }

  closeMenu(){
    this.isMenuOpen = false;
    this.overflowBodyElement();
  }

  togglemenu(){
    this.isMenuOpen = !this.isMenuOpen;
    this.overflowBodyElement();
  }

  overflowBodyElement(){
    if(isPlatformBrowser(this.platformId)){
      let bodyElement = document.querySelector('body') as HTMLElement;

      if(this.isMenuOpen){
        bodyElement.style.height = '90vh';
        bodyElement.style.overflow = 'hidden';
      }else{
        bodyElement.style.height = 'auto';
        bodyElement.style.overflow = 'auto';
      }

    }
  }

}
