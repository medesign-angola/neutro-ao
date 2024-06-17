import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Página Inicial - Neutro - It\'s about personality',
    loadChildren: () => import('./feature-modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./feature-modules/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./feature-modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'product/:slug',
    loadChildren: () => import('./feature-modules/product/product.module').then(m => m.ProductModule)
  },
  { path: 'about-us', loadChildren: () => import('./feature-modules/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'faqs', loadChildren: () => import('./feature-modules/faqs/faqs.module').then(m => m.FaqsModule) },
  { path: 'contact-us', loadChildren: () => import('./feature-modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
