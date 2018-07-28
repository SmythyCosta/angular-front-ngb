import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategoryComponent } from './sub-category.component';


const subCategoryRoutes: Routes = [
    { path: 'sub-category',        component: SubCategoryComponent },
];


@NgModule({
    imports: [RouterModule.forChild(subCategoryRoutes)],
    exports: [RouterModule]
})
export class SubCategoryRoutes { }
