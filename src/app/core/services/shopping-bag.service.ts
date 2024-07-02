import { Injectable, OnInit, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Product } from "@core/data/models/product.model";

interface Checkout{
    quantity: number,
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
        // this.getSubTotal();
    }

    addItem(product: Product): void{
        let theItem = this.products.find(item => item.product.id === product.id);
        if(theItem) return;
        this.products.push({ quantity: 1, product: product });
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