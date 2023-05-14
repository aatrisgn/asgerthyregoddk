import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailService } from 'src/app/Services/EmailService';

@Component({
  selector: 'section-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[EmailService]
})
export class ContactComponent {
  private _emailService:EmailService;

  Test:string = "asdasd";

  constructor(private emailService:EmailService) {
    this._emailService = emailService;
  }

  TrySendEmail(){
    console.log(this.Test);
  }

}
