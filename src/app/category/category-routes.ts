import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


const categoryRoutes: Routes = [
    { path: '', component: CategoryListComponent, data: {title: 'Category List'} },
    { path: 'form', component: CategoryFormComponent, data: {title: 'Category Manage'} },
    { path: 'form/:id', component: CategoryFormComponent, data: {title: 'Category Manage'} }
];


@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutes { }
