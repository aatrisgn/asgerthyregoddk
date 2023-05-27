import { Component } from '@angular/core';
import { EmailService } from 'src/app/Services/EmailService';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EmailContent } from 'src/app/models/EmailContent';

@Component({
  selector: 'section-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[EmailService]
})
export class ContactComponent {
  private _emailService:EmailService;

  public reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    message: new FormControl('')
  })

  constructor(private emailService:EmailService) {
    this._emailService = emailService;
  }

  TrySendEmail(){
    let formValues = this.reactiveForm.value;
    let email = new EmailContent(formValues['name'], formValues['email'], formValues['message']);
    this._emailService.SendEmail(email);
  }

}
