import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { ModalSupporter } from '@core/data/classes/modal.class';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  showMedia = false;

  constructor(){}

  openMedia(){
    this.showMedia = true;
  }

  hideModalStatusEventHandler(event: boolean){
    if(event){
      this.showMedia = false;
    }
  }

}
