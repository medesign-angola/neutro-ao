import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, ViewChild, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeEnum } from '@core/data/enums/theme.enum';
import { HeaderItemsModel } from '@core/data/models/header-items.model';
import { Product, productSize } from '@core/data/models/product.model';
import { Checkout, CheckoutOptions, ShoppingBagService } from '@core/services/shopping-bag.service';
import { ThemeService } from '@core/services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private changeDetectorRef: ChangeDetectorRef,
    public themeService: ThemeService,
    public shoppingBagService: ShoppingBagService,
  ) { }

  themeEnum = ThemeEnum;

  @Input() headerItems: HeaderItemsModel[] = [];
  @ViewChild('desktopNavbar') desktopNavbar!: ElementRef<HTMLElement>;
  desktopDropdownContainerMarginLeft: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isMenuOpen: boolean = false;
  showDesktopDropdown = false;
  rightDropdownVisible = false;

  checkoutModalVisible = signal(false);

  desktopDropdownItems = [
    { section: 'about-us', imagePath: 'assets/images/static/header/image-1-mi.png' },
    { section: 'faq', imagePath: 'assets/images/static/header/image-2.png' },
    { section: 'contact', imagePath: 'assets/images/static/header/image-3.png' },
    { section: 'terms', imagePath: 'assets/images/static/header/image-4.png' },
  ];

  itemHovered: string = '';

  openAvailableColorsPanel: boolean = false;

  @ViewChild('headerContentElement') headerContentElement!: ElementRef<HTMLElement>;
  @Output() contentMarginTop: EventEmitter<number> =  new EventEmitter<number>();

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.contentMarginTop.emit(this.headerContentElement.nativeElement.clientHeight);
    this.desktopDropdownContainerMarginLeft.next(this.desktopNavbar.nativeElement.offsetLeft);
    this.changeDetectorRef.detectChanges();
  }

  openDesktopDropdown(){
    this.showDesktopDropdown = true;
  }
  closeDesktopDropdown(){
    this.showDesktopDropdown = false;
  }

  setHoveredItem(section: string){
    this.itemHovered = section;
  }

  openMenu(){
    this.isMenuOpen = true;
    this.overflowBodyElement();
  }

  closeMenu(){
    this.isMenuOpen = false;
    if(this.rightDropdownVisible){
      this.hideRightDropdown();
    }
    this.overflowBodyElement();
  }
  
  toggleRightDropdown(){
    this.rightDropdownVisible = !this.rightDropdownVisible;
  }

  openRightDropdown(){
    this.rightDropdownVisible = true;
  }

  hideRightDropdown(){
    this.rightDropdownVisible = false;
  }

  togglemenu(){
    this.isMenuOpen = !this.isMenuOpen;
    this.overflowBodyElement();
  }

  openCheckoutModal(){
    this.checkoutModalVisible.update(val => val = true);
    this.overflowBodyElement();
  }

  closeCheckoutModal(){
    this.checkoutModalVisible.update(val => val = false);
    this.overflowBodyElement();
  }

  toggleCheckoutModal(){
    this.checkoutModalVisible.update(val => val = !this.checkoutModalVisible());
    this.overflowBodyElement();
  }

  openAvailableColors(product: Checkout){
    this.openAvailableColorsPanel = true;
  }

  overflowBodyElement(){
    if(isPlatformBrowser(this.platformId)){
      let bodyElement = document.querySelector('body') as HTMLElement;

      if(this.isMenuOpen || this.checkoutModalVisible()){
        bodyElement.style.height = '90vh';
        bodyElement.style.overflow = 'hidden';
      }else{
        bodyElement.style.height = 'auto';
        bodyElement.style.overflow = 'auto';
      }

    }
  }

  increaseQuantity(product: Product, options: CheckoutOptions){
    this.shoppingBagService.increaseQuantity(product, options);
  }

  decreaseQuantity(product: Product, options: CheckoutOptions){
    this.shoppingBagService.decreaseQuantity(product, options);
  }

  changeColor(product: Product, options: CheckoutOptions, newColorIndex: number){
    this.shoppingBagService.changeColor(product, options, newColorIndex);
  }

  changeSize(product: Product, options: CheckoutOptions, newSizeIndex: number){
    this.shoppingBagService.changeSize(product, options, newSizeIndex);
  }

  verifySizeAvailabilityByColor(colorName: string, size: productSize): boolean{
    return (size.availableForColors.includes(colorName)) ? true : false;
  }

  removeItem(product: Product, options: CheckoutOptions){
    this.shoppingBagService.removeItem(product, options);
  }

  order(){
    if(!(this.shoppingBagService.items().length > 0)) return;
    this.shoppingBagService.order();
  }

}
