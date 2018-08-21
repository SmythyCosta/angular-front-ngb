import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


const categoryRoutes: Routes = [
    { path: 'category', component: CategoryListComponent, data: {title: 'Category List'} },
    { path: 'category/form', component: CategoryFormComponent, data: {title: 'Category Manage'} },
    { path: 'category/form/:id', component: CategoryFormComponent, data: {title: 'Category Manage'} }
];


@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutes { }
