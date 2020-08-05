import { Component, OnInit } from '@angular/core';
import { Email, createTestEmail } from '../../email/models/email';
import { getRandomNumber } from 'src/app/helpers';
import { EmailService } from '../../email/services/email.service';

@Component({
  selector: 'app-email-list-page',
  templateUrl: './email-list-page.component.html',
  styleUrls: ['./email-list-page.component.scss'],
})
export class EmailListPageComponent implements OnInit {


  constructor(public emailService: EmailService) {}

  ngOnInit(): void { }

  public onEmailRemove(emailId) {
    this.emailService.deleteEmail(emailId);
  }

  public onEmailSeen(email: Email) {
    this.emailService.updateEmail(email.id, {seen: true})
  }
}
