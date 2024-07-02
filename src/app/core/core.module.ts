import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/static/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './components/static/faq/faq.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FaqComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FaqComponent,
    FooterComponent
  ]
})
export class CoreModule { }
