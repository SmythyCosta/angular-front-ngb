import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryListComponent, CategoryFormComponent],
  exports: [CategoryListComponent, CategoryFormComponent]
})
export class CategoryModule { }
