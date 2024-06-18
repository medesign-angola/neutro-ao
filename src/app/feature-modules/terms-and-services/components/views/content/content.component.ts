import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export enum TabEnum {
  HOW_TO_BUY = 'how-to-buy',
  REIMBURSEMENT = 'reimbursement',
  SHIPPING_POLICY = 'shipping-policy',
  PRIVACY_POLICY = 'privacy-policy',
  TERMS_OF_SERVICES = 'terms-of-services',
  COOKIE_SETTINGS = 'cookie-settings'
};

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  tabEnum = TabEnum;
  activeTab = this.tabEnum.HOW_TO_BUY

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const queryParam = params['content'] ?? this.tabEnum.HOW_TO_BUY;
      this.activeTab = queryParam;
    });
  }

}
