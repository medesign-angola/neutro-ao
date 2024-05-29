import { Component, Input } from '@angular/core';
import { Faq } from '@core/data/models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
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
  ];
}
