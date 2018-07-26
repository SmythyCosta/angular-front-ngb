import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';


const routes: Routes = [
    { path: '', redirectTo: '/category', pathMatch: 'full' },
    { path: 'category',         component: CategoryComponent },
    { path: 'sub-category',     component: SubCategoryComponent },
    { path: '**',               component: SubCategoryComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
