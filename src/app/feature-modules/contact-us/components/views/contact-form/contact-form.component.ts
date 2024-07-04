import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { API } from '@core/api/api.service';
import { BehaviorSubject } from 'rxjs';

export enum ContactUsResponseEnum{
  OK = 200,
  INTERNAL_ERROR = 500,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  private apiService = inject(API);

  contactUsFormGroup: any;

  isSendingTheEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hasSentTheEmail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showErrorMessage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showEmailSentMessage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.contactUsFormGroup = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', [Validators.required]),
      'terms': new FormControl('', [Validators.requiredTrue]),
    });
  }

  submit(){
    if(this.contactUsFormGroup.invalid) return;

    let contactFormData = new FormData();
    contactFormData.append('name', this.contactUsFormGroup.get('name').value)
    contactFormData.append('email', this.contactUsFormGroup.get('email').value)
    contactFormData.append('subject', 'Mensagem de um visitante do Site')
    contactFormData.append('message', this.contactUsFormGroup.get('message').value)

    this.isSendingTheEmail.next(true);
    this.apiService.contactUs(contactFormData).subscribe({
      next: (response) => {
        this.isSendingTheEmail.next(false);
        if(response.code === ContactUsResponseEnum.OK){
          this.contactUsFormGroup.reset();
          this.showEmailSentMessage.next(true);
          setTimeout(() => {
            this.showEmailSentMessage.next(false);
          }, 3000);
        }

      },
      error: (error) => {
        this.showErrorMessage.next(true);
        setTimeout(() => {
          this.showErrorMessage.next(false);
        }, 3000);
        this.isSendingTheEmail.next(false);
      },
      complete: () => {
        this.isSendingTheEmail.next(false);
      }
    });
  }

}
