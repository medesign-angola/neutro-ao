import { Pipe, PipeTransform } from '@angular/core';
import { productGenderEnum } from '@core/data/models/product.model';

@Pipe({
  name: 'genderTranslation',
  standalone: true
})
export class GenderTranslationPipe implements PipeTransform {

  productGenderEnum = productGenderEnum;

  transform(value: productGenderEnum): string {
    switch(value){
      case this.productGenderEnum.WOMAN:
        return 'Mulheres';
      case this.productGenderEnum.MAN:
        return 'Homens';
      default:
        return 'Outro';
    }
  }

}
