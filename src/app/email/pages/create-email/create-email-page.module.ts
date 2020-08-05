import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmailModule } from '../../email.module';
import { CreateEmailComponent } from '../../components/create-email/create-email.component';

const routes: Route[] = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: CreateEmailComponent },
  { path: ':id', component: CreateEmailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, EmailModule, RouterModule.forChild(routes)],
})
export class CreateEmailPageModule {}
