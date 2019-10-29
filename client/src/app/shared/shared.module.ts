import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {
  public constructor(@Optional() @SkipSelf() parent: SharedModule) {
    if (parent) {
      return parent;
    }
  }
}
