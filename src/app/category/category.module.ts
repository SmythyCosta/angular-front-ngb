import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule
  ],
  declarations: [CategoryListComponent, CategoryFormComponent],
  exports: [CategoryListComponent, CategoryFormComponent]
})
export class CategoryModule { }
