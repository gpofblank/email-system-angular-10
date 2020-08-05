import { Component } from '@angular/core';
import { EmailService } from './email/services/email.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public newEmailsCount = 0;

  constructor(private emailService: EmailService, public authService: AuthService, private router: Router) {
    this.emailService.newEmails()
      .subscribe(emails => this.newEmailsCount = emails.length)
  }

  title = 'email-system';

  public logout() {
    this.authService.logout()
      .subscribe(res => this.router.navigateByUrl('/auth/login'))
  }
}
