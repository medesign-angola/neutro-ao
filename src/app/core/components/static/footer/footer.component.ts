import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { API } from '@core/api/api.service';
import { BehaviorSubject } from 'rxjs';
import { TabEnum } from 'src/app/feature-modules/terms-and-services/components/views/content/content.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  termsAndServicesTabsEnum = TabEnum;

  private apiService = inject(API);
  
  constructor(@Inject(PLATFORM_ID) private platformId: any){ }

  subscriptionFormGroup: any;
  hasSubscribed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hasError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSubscribing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.subscriptionFormGroup = new FormGroup({
      'email': new FormControl('', [ Validators.required, Validators.email ])
    });
  }

  submit(){
    if(this.subscriptionFormGroup.invalid) return;
  
    let subscriber = {
      email: this.subscriptionFormGroup.get('email').value,
      status: 'confirmed',
      lists: [1]
    }

    this.isSubscribing.next(true);
    this.apiService.subscribe(subscriber).subscribe((response: any) => {
      if(response.id){
        this.hasSubscribed.next(true);
      }else{
        this.hasError.next(true);
      }

      if(isPlatformBrowser(this.platformId)){
        setTimeout(() => {
          this.hasSubscribed.next(false);
          this.hasError.next(false);
        }, 4000);
      }

      this.isSubscribing.next(false);
      this.subscriptionFormGroup.reset();
    });
  }

}
