import { Component } from '@angular/core';
import { TabEnum } from 'src/app/feature-modules/terms-and-services/components/views/content/content.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  termsAndServicesTabsEnum = TabEnum;
}
