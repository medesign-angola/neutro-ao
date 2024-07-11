import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { API } from '@core/api/api.service';
import { ModalSupporter } from '@core/data/classes/modal.class';
import { productSize } from '@core/data/models/product.model';
import { SharedModule } from '@shared/shared.module';
import { BehaviorSubject } from 'rxjs';
import { ContactUsResponseEnum } from 'src/app/feature-modules/contact-us/components/views/contact-form/contact-form.component';

@Component({
  selector: 'app-presale-be-your-self',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './presale-be-your-self.component.html',
  styleUrl: './presale-be-your-self.component.css'
})
export class PresaleBeYourSelfComponent extends ModalSupporter implements OnInit {

  private apiService = inject(API);

  activeIndex: number = 0;
  @ViewChild('imagesContainerElement') imagesContainerElement!: ElementRef<HTMLElement>;

  sizes: productSize[] = [
    { name: "S", availableForColors: [] },
    { name: "M", availableForColors: [] },
    { name: "L", availableForColors: [] },
    { name: "XL", availableForColors: [] }
  ];

  selectedSize: number = 0;

  quantity: number = 1;
  
  productImages: string[] = [
    'assets/images/presale/image-1.jpg',
    'assets/images/presale/image-2.jpg',
    'assets/images/presale/image-3.jpg',
  ];

  productFeatures: string[] = [
    'Feita com 100% de algodão',
    'Estampa na parte de trás',
    'Mais uma característica',
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ];

  showDetails: boolean = false;

  presaleRequestFormGroup: any;

  isSendingTheEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hasSentTheEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showErrorMessage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showEmailSentMessage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  submitted: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    super();
  }

  ngOnInit(): void {
    
    this.presaleRequestFormGroup = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'number': new FormControl('', [Validators.required]),
    });

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

  toggleShowDetails(){
    this.showDetails = !this.showDetails;
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

  submit(){
    
    if(this.presaleRequestFormGroup.invalid) return;

    this.submitted = true;
    let number = this.presaleRequestFormGroup.get('number').value;

    let contactFormData = new FormData();
    contactFormData.append('name', this.presaleRequestFormGroup.get('name').value)
    contactFormData.append('email', 'email.naoobrigatorio@example.com');
    contactFormData.append('subject', 'Reserva - Nova coleção t-shirt neutro oversize')
    contactFormData.append('message', `
      Olá, bom dia.<br>
      Eu, ${ this.presaleRequestFormGroup.get('name').value }, tenho a intenção de reservar ${ this.quantity } camisola${ this.quantity > 1 ? 's' : '' } da nova colecção conforme o formulário no vosso website:<br>
      Informações de Reserva:<br>
      <b>Tamanho: </b> ${ this.sizes[this.selectedSize].name }<br>
      <b>Quantidade: </b> ${ this.quantity }<br>
      Abaixo estão os meus contactos:<br>
      <b>Telefone: </b> ${ number }
    `)

    this.isSendingTheEmail.next(true);
    this.apiService.contactUs(contactFormData).subscribe({
      next: (response) => {
        this.isSendingTheEmail.next(false);
        if(response.code === ContactUsResponseEnum.OK){
          this.presaleRequestFormGroup.reset();
          this.showEmailSentMessage.next(true);
          setTimeout(() => {
            this.showEmailSentMessage.next(false);
          }, 3000);
        }

      },
      error: (error) => {
        this.showErrorMessage.next(true);
        setTimeout(() => {
          this.showErrorMessage.next(false);
        }, 3000);
        this.isSendingTheEmail.next(false);
      },
      complete: () => {
        this.isSendingTheEmail.next(false);
      }
    });
  }
}
