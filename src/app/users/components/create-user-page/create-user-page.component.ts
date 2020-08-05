import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss'],
})
export class CreateUserPageComponent implements OnInit {
  public name: string = '';
  public age: number = null;
  public password: '';

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void { }

  createUser() {
    this.usersService.createUser(this.name, this.age, this.password)
      .subscribe(response => {
        this.router.navigateByUrl('/users')
      })
  }
}
