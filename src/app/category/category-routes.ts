import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


const categoryRoutes: Routes = [
    { path: 'category',             component: CategoryListComponent },
    { path: 'category/form/:id',    component: CategoryFormComponent }
];


@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutes { }
