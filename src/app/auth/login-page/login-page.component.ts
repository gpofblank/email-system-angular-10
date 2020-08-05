import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public loading = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.auth.login(this.loginForm.value).subscribe(
        (data) => {
          this.loading = false;
          if (!data.error) {
            this.router.navigateByUrl('/emails')
          }
        },
        (err) => {
          this.loading = false;
        });
    } else {
      // show error
      console.error('Invalid Form');
    }
  }

  ngOnInit(): void {}
}
