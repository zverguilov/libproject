import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users/all-users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routing';

@NgModule({
  declarations: [AllUsersComponent, SingleUserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
  ]
})
export class UsersModule { }
