import { Injectable } from "@angular/core";
import { Faq } from "@core/data/models/faq.model";

const DEFAULT_FAQ_ITEMS = 4;

@Injectable({
    providedIn: 'root'
})
export class FaqService{
    private pages = [
        {
            page: '',
            length: DEFAULT_FAQ_ITEMS
        },
        {
            page: 'products',
            length: DEFAULT_FAQ_ITEMS
        },
        {
            page: 'product',
            length: DEFAULT_FAQ_ITEMS
        },
        {
            page: 'faqs',
            length: -1
        },
    ];

    private faqs: Faq[] = [
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

    showFaq(reference: string): boolean{
        return (this.pages.findIndex(item => item.page === reference) !== -1) ? true : false ;
    }

    showFaqItemsLength(reference: string): number{
        let thePage = this.pages.find(item => item.page === reference);
        return (thePage) ? thePage.length : -1;
    }

    getFaqForPage(reference: string): Faq[]{
        let limitedFaqs: Faq[] = [];
        let theLimit = this.showFaqItemsLength(reference);
        if(theLimit  === -1){
            for (let index = this.faqs.length - 1; index >= 0; index--) {
                limitedFaqs.push(this.faqs[index]);
            }
        } else {
            let lastItem = this.faqs.length - 1;
            for (let index = lastItem; index > (lastItem - DEFAULT_FAQ_ITEMS); index--) {
                limitedFaqs.push(this.faqs[index]);
            }
        }
        return limitedFaqs;
    }

}