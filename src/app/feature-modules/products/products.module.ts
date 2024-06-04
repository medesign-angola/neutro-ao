import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/containers/products.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsContainerComponent } from './components/views/products-container/products-container.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsContainerComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
