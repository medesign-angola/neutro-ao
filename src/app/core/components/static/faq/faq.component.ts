import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Faq } from '@core/data/models/faq.model';
import { FaqService } from '@core/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit, OnChanges {
  constructor(@Inject(PLATFORM_ID) private platformId: any){}

  activeIndex: number = -1;
  activeFaqBodyHeight: number = 0;
  @Input() faqs: Faq[] = [];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  openFaq(index: number){

    if(this.activeIndex === index){
      this.activeIndex = -1;
      return;
    }

    this.activeIndex = index;
    let FAQ_BODY_ELEMENT_INDEX = 1;
    let PARAGRAPH_ELEMENT_INDEX = 0;
    if(!isPlatformBrowser(this.platformId)) return;
    let faqsElement = document.querySelectorAll('.faq') as NodeListOf<HTMLElement>;
    let clickedFaq = faqsElement[index];

    this.activeFaqBodyHeight = clickedFaq.children[FAQ_BODY_ELEMENT_INDEX].children[PARAGRAPH_ELEMENT_INDEX].clientHeight;
  }

  closeFaqs(index: number){
    this.activeIndex = -1;
  }

}
