import { Injectable, OnInit, Signal, WritableSignal, computed, inject, signal } from "@angular/core";
import { Product } from "@core/data/models/product.model";
import { OrderService } from "./order.service";

export interface Checkout{
    quantity: number,
    colorIndex: number,
    promotionalPrice: boolean,
    sizeIndex: number,
    product: Product
}

export interface CheckoutOptions{
    promotionalPrice: boolean,
    selectedColorIndex: number,
    selectedSize: number,
    quantity: number
}

@Injectable({
    providedIn: 'root'
})
export class ShoppingBagService implements OnInit{

    items: WritableSignal<Checkout[]> = signal([]);
    subtotal: Signal<number> = signal(0);

    private products: Checkout[] = [];
    private orderService = inject(OrderService);

    ngOnInit(): void {
        
    }

    addItem(product: Product, options: CheckoutOptions = { promotionalPrice: false, selectedColorIndex: 0, selectedSize: 0, quantity: 1 } ): void{
        const theItemIndex = this.shoppingBagProductIndex(product, options);
    
        if (theItemIndex > -1) {
            // Remove o produto se já existir com as mesmas características
            product.isInShoppingBag = false;
            this.removeItem(product, options);
        } else {
            // Verifica se existe algum produto com uma das características diferentes
            const similarItemIndex = this.products.findIndex(p =>
                p.product.id === product.id &&
                (p.colorIndex === options.selectedColorIndex || p.sizeIndex === options.selectedSize)
            );
    
            if (similarItemIndex > -1) {
                // Adiciona uma nova linha para o produto com características diferentes
                product.isInShoppingBag = true;
                this.products.push({
                    quantity: options.quantity,
                    colorIndex: options.selectedColorIndex,
                    promotionalPrice: options.promotionalPrice,
                    sizeIndex: options.selectedSize,
                    product: product
                });
            } else {
                // Adiciona o produto pela primeira vez
                product.isInShoppingBag = true;
                this.products.push({
                    quantity: options.quantity,
                    colorIndex: options.selectedColorIndex,
                    promotionalPrice: options.promotionalPrice,
                    sizeIndex: options.selectedSize,
                    product: product
                });
            }
        }
        this.items.set(this.products);

        this.getSubTotal();
    }

    shoppingBagProductIndex(product: Product, options: CheckoutOptions ): number{
        const theItemIndex = this.products.findIndex(p =>
            p.product.id === product.id &&
            p.colorIndex === options.selectedColorIndex &&
            p.sizeIndex === options.selectedSize
        );
        return theItemIndex;
    }

    removeItem(product: Product, options: CheckoutOptions): void{

        let theItemIndex = this.shoppingBagProductIndex(product, options);
        if(theItemIndex === -1) return;

        this.products.splice(theItemIndex, 1);
        this.items.set(this.products);

        this.getSubTotal();
    }

    increaseQuantity(product: Product, options: CheckoutOptions){
        let theItemIndex = this.shoppingBagProductIndex(product, options);
        if(theItemIndex === -1) return;

        this.products[theItemIndex].quantity++;

        this.getSubTotal();
    }

    decreaseQuantity(product: Product, options: CheckoutOptions){
        let theItemIndex = this.shoppingBagProductIndex(product, options);
        if(theItemIndex === -1) return;

        if(this.products[theItemIndex].quantity === 1) return;

        this.products[theItemIndex].quantity--;

        this.getSubTotal();
    }

    private getSubTotal(){
        this.subtotal = computed(() => {
            let values: number[] = [];
            this.items().forEach(item => {
                values.push(((item.promotionalPrice && item.product.promotionalPrice > 0) ? item.product.promotionalPrice : item.product.price) * item.quantity)
            });
             return values.reduce((val1, val2) => {
                return val1 + val2;
            }, 0)
        });
    }

    order(items: Checkout[] = this.items(), subtotal: number = this.subtotal()){
        this.orderService.whatsapp(items, subtotal);
    }

}