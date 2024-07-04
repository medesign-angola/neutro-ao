import { Injectable, OnInit, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Product } from "@core/data/models/product.model";

interface Checkout{
    quantity: number,
    colorIndex: number,
    promotionalPrice: boolean,
    sizeIndex: number,
    product: Product
}

@Injectable({
    providedIn: 'root'
})
export class ShoppingBagService implements OnInit{

    items: WritableSignal<Checkout[]> = signal([]);
    subtotal: Signal<number> = signal(0);

    private products: Checkout[] = [];

    ngOnInit(): void {
        
    }

    addItem(product: Product, options: { promotionalPrice: boolean, selectedColorIndex: number, selectedSize: number, quantity: number } = { promotionalPrice: false, selectedColorIndex: 0, selectedSize: 0, quantity: 1 } ): void{
        let theItemIndex = this.products.findIndex(item => item.product.id === product.id);
        if(theItemIndex > -1){

            this.products[theItemIndex] = {
                quantity: options.quantity,
                colorIndex: options.selectedColorIndex,
                promotionalPrice: options.promotionalPrice,
                sizeIndex: options.selectedSize,
                product: product
            };
            
        } else {

            this.products.push({
                quantity: options.quantity,
                colorIndex: options.selectedColorIndex,
                promotionalPrice: options.promotionalPrice,
                sizeIndex: options.selectedSize,
                product: product
            });

        }
        this.items.set(this.products);

        this.getSubTotal();
    }

    removeItem(product: Product): void{
        let theItemIndex = this.products.findIndex(item => item.product.id === product.id);
        if(theItemIndex === -1) return;

        this.products.splice(theItemIndex, 1);
        this.items.set(this.products);

        this.getSubTotal();
    }

    increaseQuantity(product: Product){
        let theItemIndex = this.products.findIndex(item => item.product.id === product.id);
        if(theItemIndex === -1) return;

        this.products[theItemIndex].quantity++;

        this.getSubTotal();
    }

    decreaseQuantity(product: Product){
        let theItemIndex = this.products.findIndex(item => item.product.id === product.id);
        
        if(theItemIndex === -1) return;
        if(this.products[theItemIndex].quantity === 1) return;

        this.products[theItemIndex].quantity--;

        this.getSubTotal();
    }

    private getSubTotal(){
        this.subtotal = computed(() => {
            let values: number[] = [];
            this.items().forEach(item => {
                values.push(item.product.price * item.quantity)
            });
             return values.reduce((val1, val2) => {
                return val1 + val2;
            }, 0)
        });
    }

}