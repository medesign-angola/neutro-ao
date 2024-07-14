import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ReplaceByFunction{
    transform(value: number, replace: string = ',', to: string = '.'): string | undefined {
        return parseFloat(value.toString()).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}