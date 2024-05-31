import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { Faq } from '@core/data/models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit, OnChanges {
  constructor(@Inject(PLATFORM_ID) private platformId: any){}
  
  activeIndex: number = -1;
  activeFaqBodyHeight: number = 0;
  @Input() faqs: Faq[] = [
    {
      question: 'O que torna a marca Neutro única ?',
      answer: 'A marca Neutro destaca-se pela sua abordagem minimalista e versátil para a moda. Nossas peças são cuidadome projetadas para oferecer conforto, estilo e facilidade de combinação.'
    },
    {
      question: 'O quais são os materias utilizados nas roupas ?',
      answer: 'A marca Neutro destaca-se pela sua abordagem minimalista e versátil para a moda. Nossas peças são cuidadome projetadas para oferecer conforto, estilo e facilidade de combinação.'
    },
    {
      question: 'Como posso saber qual tamanho escolher ?',
      answer: 'A marca Neutro destaca-se pela sua abordagem minimalista e versátil para a moda. Nossas peças são cuidadome projetadas para oferecer conforto, estilo e facilidade de combinação.'
    },
    {
      question: 'Tem opções de cores além de tons neutros ?',
      answer: 'A marca Neutro destaca-se pela sua abordagem minimalista e versátil para a moda. Nossas peças são cuidadome projetadas para oferecer conforto, estilo e facilidade de combinação.'
    },
    {
      question: 'Qual é a política de devolução dos produtos ?',
      answer: 'A marca Neutro destaca-se pela sua abordagem minimalista e versátil para a moda. Nossas peças são cuidadome projetadas para oferecer conforto, estilo e facilidade de combinação.'
    },
    {
      question: 'Onde posso comprar produtos da Neutro ?',
      answer: 'A marca Neutro destaca-se pela sua abordagem minimalista e versátil para a moda. Nossas peças são cuidadome projetadas para oferecer conforto, estilo e facilidade de combinação.'
    },
  ];

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
