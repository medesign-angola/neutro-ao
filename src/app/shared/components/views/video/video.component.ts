import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { ModalSupporter } from '@core/data/classes/modal.class';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent extends ModalSupporter implements OnInit, OnChanges {

  @Input() video: string = '';
  @Input() showModalFromParent: boolean = false;
  @Output() hideModalOnParent = new EventEmitter<boolean>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ){
    super();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.showModalFromParent){
      this.openMedia();
    } else {
      this.hideMedia();
    }
  }

  openMedia(){
    this.showModalBackground.set(true);
    this.firstTimeOpeningModal.set(false);
    this.hideModalOnParent.emit(false);
    this.toggleOverflowHiddenBodyElement(true);
  }

  hideMedia(){
    this.showModalBackground.set(false);
    this.hideModalOnParent.emit(true);
    this.toggleOverflowHiddenBodyElement(false);
  }
  
  
  override toggleOverflowHiddenBodyElement(value: boolean){
    if(!isPlatformBrowser(this.platformId)) return;
    let bodyElement = document.querySelector("body") as HTMLElement;
    
    if(value){
      bodyElement.style.height = '90vh';
      bodyElement.style.overflow = 'hidden';
    }else{
      bodyElement.style.height = 'auto';
      bodyElement.style.overflow = 'auto';
    }
  }
}
