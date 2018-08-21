import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { CategoryListComponent }    from './category-list/category-list.component';
import { CategoryFormComponent }    from './category-form/category-form.component';
import { CategoryRoutes }           from './category-routes';
import { CategoryService }          from '../_services/category.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CategoryRoutes
    ],
    declarations: [CategoryListComponent, CategoryFormComponent],
    providers:[CategoryService]
})
export class CategoryModule { }
