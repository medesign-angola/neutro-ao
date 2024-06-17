import { Injectable } from "@angular/core";

const DEFAULT_FAQ_ITEMS = 6;

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

    showFaq(reference: string): boolean{
        return (this.pages.findIndex(item => item.page === reference) !== -1) ? true : false ;
    }

    showFaqItemsLength(reference: string): number | undefined{
        let thePage = this.pages.find(item => item.page === reference);
        return (thePage) ? thePage.length : undefined;
    }

}