import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsAndServicesComponent } from './components/containers/terms-and-services.component';

const routes: Routes = [{ path: '', component: TermsAndServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsAndServicesRoutingModule { }
