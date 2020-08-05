import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private backend = 'http://localhost:3000/';

  constructor(private network: HttpClient) {}

  public createUser(name: string, age: number, password) {
    return this.network.post(this.backend + 'user/create', { name, age, password });
  }

  public getAllUsers() {
    return this.network.get<Array<any>>(this.backend + 'users')
  }
}
