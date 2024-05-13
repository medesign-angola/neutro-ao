import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './components/container/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
    title: 'Brevemente - Neutro'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }
