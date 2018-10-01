import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { SubCategoryComponent }     from './sub-category.component';
import { SubCategoryFormComponent } from './sub-category-form.component';


const subCategoryRoutes: Routes = [
    { path: '', component: SubCategoryComponent, data: {title: 'SubCategory List'} },
    { path: 'form', component: SubCategoryFormComponent, data: {title: 'SubCategory Manage'} },
    { path: 'form/:id', component: SubCategoryFormComponent, data: {title: 'SubCategory Manage'} }
];


@NgModule({
    imports: [RouterModule.forChild(subCategoryRoutes)],
    exports: [RouterModule]
})
export class SubCategoryRoutes { }
