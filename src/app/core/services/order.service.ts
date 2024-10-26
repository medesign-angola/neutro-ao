import { Checkout } from "./shopping-bag.service";
import { Inject, inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { ReplaceByFunction } from "@shared/pipes/replace-by.function";

@Injectable({
    providedIn: 'root'
})
export class OrderService{
    private replaceByFunction = inject(ReplaceByFunction)

    constructor(@Inject(PLATFORM_ID) private platformId: any) {}

    whatsapp(products: Checkout[], subtotal: number): void{
        if(!isPlatformBrowser(this.platformId)) return;
        let preparedMessage = `Olá, gostaria de fazer meu pedido:\n`;
        let total = `\n*Subtotal:* ${ this.replaceByFunction.transform(subtotal) }AOA\n*Total:* ${ this.replaceByFunction.transform(subtotal) } AOA`;
        products.forEach(item => {
            preparedMessage += `\n${ item.quantity } x ${ item.product.name } (${ location.origin }/product/${ item.product.slug })\n▪ *Cor:* ${ item.product.colors[item.colorIndex].name }\n▪ *Tamanho:* ${ item.product.sizes[item.sizeIndex].name }\n▪ *Preço:* ${ this.replaceByFunction.transform(item.product.price) } AOA\n▪ *Preço promocional:* ${ this.replaceByFunction.transform(item.product.promotionalPrice) } AOA\n`;
        });
        
        const encodedMessage = encodeURIComponent(preparedMessage + total);
        // window.open(`https://api.whatsapp.com/send?phone=244927730370&text=${ encodedMessage }`);
        window.open(`https://api.whatsapp.com/send?phone=244940909003&text=${ encodedMessage }`);
    }
}