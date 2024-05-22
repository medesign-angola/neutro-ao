import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceBy'
})
export class ReplaceByPipe implements PipeTransform {

  transform(value: number | null | undefined, replace: string = ',', to: string = '.'): string | undefined {
    if(!value) return;
    return parseFloat(value?.toString()).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

}
