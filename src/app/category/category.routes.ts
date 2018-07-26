import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


const routes: Routes = [
    { path: 'category',         component: CategoryListComponent },
    { path: 'category/:id',     component: CategoryFormComponent },
    { path: '**',               component: CategoryListComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutes { }