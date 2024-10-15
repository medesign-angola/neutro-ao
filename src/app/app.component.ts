import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FaqService } from '@core/services/faq.service';
import { TabEnum } from './feature-modules/terms-and-services/components/views/content/content.component';
import { environment } from 'src/environments/environment.development';
import { ModalSupporter } from '@core/data/classes/modal.class';
import { isPlatformBrowser } from '@angular/common';
import { Faq } from '@core/data/models/faq.model';
import { DevToolsDisabling } from '@core/classes/devtools-disabling.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends DevToolsDisabling implements OnInit {
  
  private faqService = inject(FaqService);
  private router = inject(Router);
  
  termsAndServicesTabsEnum = TabEnum;
  contentMarginTop: number = 0;
  showFaq$ = signal(false);
  faqs: Faq[] = [];
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ){
    super();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      const PATH_NAME_INDEX = 1;
      if(event instanceof NavigationEnd){
        const pathname = event.url.split('?')[0].split('/')[PATH_NAME_INDEX];
        this.showFaq$.update(val => val = this.faqService.showFaq(pathname));
        this.faqs = this.faqService.getFaqForPage(pathname);
      }
    });
  }

  contentMarginTopHandler($event: any){
    this.contentMarginTop = $event;
    this.changeDetectorRef.detectChanges();
  }

}
