import { ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FaqService } from '@core/services/faq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  private faqService = inject(FaqService);
  private router = inject(Router);
  
  contentMarginTop: number = 0;
  showFaq$ = signal(false);
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ){ }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      const PATH_NAME_INDEX = 1;
      if(event instanceof NavigationEnd){
        const pathname = event.url.split('?')[0].split('/')[PATH_NAME_INDEX];
        this.showFaq$.update(val => val = this.faqService.showFaq(pathname));
      }
    });
  }

  contentMarginTopHandler($event: any){
    this.contentMarginTop = $event;
    this.changeDetectorRef.detectChanges();
  }

}
