import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {
  constructor(private readonly http: HttpClient) { }

  public getAllBooks(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/books');
  }
}
