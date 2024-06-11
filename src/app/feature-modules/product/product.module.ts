import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/containers/product.component';
import { ProductDetailsComponent } from './components/views/product-details/product-details.component';
import { SharedModule } from '@shared/shared.module';
import { ProductImagesComponent } from './templates/carousel/product-images/product-images.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductImagesComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
