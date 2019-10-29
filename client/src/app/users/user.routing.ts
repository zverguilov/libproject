import { AllUsersComponent } from './all-users/all-users.component';
import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

export const userRoutes: Routes = [
  { path: '', component: AllUsersComponent },
  { path: ':id/details', component: UserDetailsComponent }
];
