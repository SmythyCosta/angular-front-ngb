import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryListComponent],
  exports: [CategoryListComponent]
})
export class CategoryModule { }
