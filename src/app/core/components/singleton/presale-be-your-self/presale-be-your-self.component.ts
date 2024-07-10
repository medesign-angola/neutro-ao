import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ModalSupporter } from '@core/data/classes/modal.class';
import { productSize } from '@core/data/models/product.model';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-presale-be-your-self',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './presale-be-your-self.component.html',
  styleUrl: './presale-be-your-self.component.css'
})
export class PresaleBeYourSelfComponent extends ModalSupporter implements OnInit {

  activeIndex: number = 0;
  @ViewChild('imagesContainerElement') imagesContainerElement!: ElementRef<HTMLElement>;

  sizes: productSize[] = [
    { name: "S", availableForColors: [] },
    { name: "M", availableForColors: [] },
    { name: "L", availableForColors: [] },
    { name: "XL", availableForColors: [] }
  ];

  selectedSize: number = -1;

  quantity: number = 1;
  
  productImages: string[] = [
    'assets/images/presale/image-1.jpg',
    'assets/images/presale/image-2.jpg',
    'assets/images/presale/image-3.jpg',
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    super();
  }

  ngOnInit(): void {
    // this.openPresaleModal();
  }
  
  openPresaleModal(){
    this.showModalBackground.update(value => value = true);
    this.firstTimeOpeningModal.update(value => value = false);
    this.toggleOverflowHiddenBodyElement(true);
  }

  closePresaleModal(){
    this.showModalBackground.update(value => value = false);
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

  next(){
    (this.activeIndex === this.productImages.length - 1) ? this.activeIndex = 0 : this.activeIndex++;
    this.scrollToActiveIndex(this.activeIndex);
  }

  prev(){
    (this.activeIndex === 0) ? (this.activeIndex = this.productImages.length - 1) : this.activeIndex--;
    this.scrollToActiveIndex(this.activeIndex);
  }

  slideTo(index: number){
    this.activeIndex = index;
    this.scrollToActiveIndex(this.activeIndex);
  }
  
  scrollToActiveIndex(activeIndex: number){
    let imagesContainerElementChildrensAsHtmlElement = this.imagesContainerElement.nativeElement.childNodes[0] as HTMLElement;
    let getActiveItemByActiveIndexAsHtmlElement = imagesContainerElementChildrensAsHtmlElement.children[activeIndex] as HTMLElement;
    this.imagesContainerElement.nativeElement.scrollTo(getActiveItemByActiveIndexAsHtmlElement.offsetLeft, 0);
  }

  selectSize(sizeIndex: number){
    this.selectedSize = sizeIndex;
  }

  decreaseQuantity(){
    if(this.quantity === 0) return;
    this.quantity--;
  }
  increaseQuantity(){
    this.quantity++;
  }

}
