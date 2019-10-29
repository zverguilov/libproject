import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routing';

@NgModule({
  declarations: [AllBooksComponent, SingleBookComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ]
})
export class BooksModule { }
