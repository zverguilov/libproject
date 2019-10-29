import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'readers', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
];
