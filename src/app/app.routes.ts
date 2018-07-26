import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubCategoryComponent } from './sub-category/sub-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryListComponent } from './category/category-list/category-list.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'category',         component: CategoryListComponent },
    { path: 'sub-category',     component: SubCategoryComponent },
    { path: '**',               component: DashboardComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
