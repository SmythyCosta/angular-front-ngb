import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { SubCategoryComponent }     from './sub-category.component';
import { SubCategoryFormComponent } from './sub-category-form.component';


const subCategoryRoutes: Routes = [
    { path: 'sub-category',             component: SubCategoryComponent },
    { path: 'sub-category/form',        component: SubCategoryFormComponent },
    { path: 'sub-category/form/:id',    component: SubCategoryFormComponent }
];


@NgModule({
    imports: [RouterModule.forChild(subCategoryRoutes)],
    exports: [RouterModule]
})
export class SubCategoryRoutes { }
