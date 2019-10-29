import { UsersService } from './services/users.service';
import { BooksService } from './services/books.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BooksService,
    UsersService,
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      return parent;
    }
  }
}
