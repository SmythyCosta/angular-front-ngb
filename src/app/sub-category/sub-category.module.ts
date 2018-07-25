import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './sub-category.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubCategoryComponent],
  exports: [SubCategoryComponent]
})
export class SubCategoryModule { }
