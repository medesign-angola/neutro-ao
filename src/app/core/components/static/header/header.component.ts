import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { HeaderItemsModel } from '@core/data/models/header-items.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  @Input() headerItems: HeaderItemsModel[] = [];
  @ViewChild('desktopNavbar') desktopNavbar!: ElementRef<HTMLElement>;
  desktopDropdownContainerMarginLeft: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isMenuOpen: boolean = false;
  showDesktopDropdown = false;

  desktopDropdownItems = [
    { section: 'about-us', imagePath: 'assets/images/static/header/image-1.png' },
    { section: 'faq', imagePath: 'assets/images/static/header/image-2.png' },
    { section: 'contact', imagePath: 'assets/images/static/header/image-3.png' },
    { section: 'terms', imagePath: 'assets/images/static/header/image-4.png' },
  ];

  itemHovered: string = '';

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
