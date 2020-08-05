import { Injectable } from '@angular/core';
import { LoginDTO } from './models/loginDTO';
import { RegisterDTO } from './models/registerDTO';
import { of } from 'rxjs';
import { delay, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../users/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backend = 'http://localhost:3000/';

  public userTestData = {
    username: 'gosho',
    email: 'gossho@mail.com',
  };

  public currentUser: User;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  public login(dto: LoginDTO) {
    return this.http.post<User>(this.backend + 'auth/login', dto).pipe(
      tap((user) => (this.currentUser = user)),
      catchError((err) => {
        this.snackBar.open(err.error.error);
        return of(err);
      })
    );
  }

  public logout() {
    return this.http
      .post(this.backend + 'auth/logout', { userId: this.currentUser.id })
      .pipe(tap(() => (this.currentUser = null)));
  }

  public register(dto: RegisterDTO) {
    return this.http.post<User>(this.backend + 'auth/register', dto).pipe(
      tap((user) => (this.currentUser = user)),
      catchError((err) => {
        this.snackBar.open(err.error.error);
        return of(err);
      })
    );
  }
}
