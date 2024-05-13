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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
