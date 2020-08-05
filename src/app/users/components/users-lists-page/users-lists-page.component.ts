import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-lists-page',
  templateUrl: './users-lists-page.component.html',
  styleUrls: ['./users-lists-page.component.scss']
})
export class UsersListsPageComponent implements OnInit {

  public users = []

  constructor(private usersServive: UsersService) { }

  ngOnInit(): void {
    this.usersServive.getAllUsers()
      .subscribe(response => this.users = response)
  }

}
