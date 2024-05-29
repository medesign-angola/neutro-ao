import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/static/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './components/static/faq/faq.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FaqComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FaqComponent
  ]
})
export class CoreModule { }
