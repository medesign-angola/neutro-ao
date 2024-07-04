import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/containers/products.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsContainerComponent } from './components/views/products-container/products-container.component';
import { FormsModule } from '@angular/forms';
import { GenderTranslationPipe } from './pipes/gender-translation.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsContainerComponent,
  ],
  imports: [
    SharedModule,
    GenderTranslationPipe,
    ProductsRoutingModule,
    FormsModule
  ],
})
export class ProductsModule { }
