import { BookDetailsComponent } from './book-details/book-details.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { Routes } from '@angular/router';

export const bookRoutes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: ':id/details', component: BookDetailsComponent }
];
