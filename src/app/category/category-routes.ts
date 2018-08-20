import { NgModule } from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { CategoryListComponent }    from './category-list/category-list.component';
import { CategoryFormComponent }    from './category-form/category-form.component';
import { AuthGuard } from '../_guards/index';


const categoryRoutes: Routes = [
    { path: 'category',             component: CategoryListComponent, canActivate: [AuthGuard] },
    { path: 'category/form',        component: CategoryFormComponent, canActivate: [AuthGuard] },
    { path: 'category/form/:id',    component: CategoryFormComponent, canActivate: [AuthGuard] }
];


@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutes { }
