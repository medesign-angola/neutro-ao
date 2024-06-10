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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
