import { BooksService } from './../../core/services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  public books: any[] = [];

  public constructor(
    private readonly booksService: BooksService,
  ) { }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe((books: any[]) => this.books = books);
  }

}
