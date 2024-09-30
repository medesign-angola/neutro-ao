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
          question: 'Qual é o prazo de entrega dos pedidos?',
          answer: 'O prazo de entrega varia conforme a localização. Normalmente, os pedidos são processados em até 2 dias úteis e entregues entre 5 a 10 dias úteis após o envio. Consulte os prazos específicos no momento da compra.'
        },
        {
          question: 'Como faço para trocar ou devolver um produto?',
          answer: 'Aceitamos devoluções em até 30 dias após a entrega, desde que o item esteja sem uso e com a etiqueta original.'
        },
        {
          question: 'Como saber qual é o tamanho ideal para mim?',
          answer: 'Disponibilizamos uma tabela de medidas detalhada em cada página de produto para ajudar você a escolher o tamanho correto. Caso tenha dúvidas, entre em contato com nossa equipe de atendimento ao cliente para suporte personalizado.'
        },
        {
          question: 'Quais formas de pagamento são aceitas?',
          answer: 'Transferência e pagamento em dinheiro no acto da entrega.'
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