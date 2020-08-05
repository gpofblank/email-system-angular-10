import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListsPageComponent } from './components/users-lists-page/users-lists-page.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CreateUserPageComponent } from './components/create-user-page/create-user-page.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: '', component: UsersListsPageComponent },
  { path: 'create', component: CreateUserPageComponent },
];

@NgModule({
  declarations: [UsersListsPageComponent, CreateUserPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class UsersModule {}
