import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  showMedia1 = false;
  showMedia2 = false;

  constructor(){}

  openMedia1(){
    this.showMedia1 = true;
  }
  openMedia2(){
    this.showMedia2 = true;
  }

  hideModal1StatusEventHandler(event: boolean){
    if(event){
      this.showMedia1 = false;
    }
  }

  hideModal2StatusEventHandler(event: boolean){
    if(event){
      this.showMedia2 = false;
    }
  }

}
