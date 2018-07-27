import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


const categoryRoutes: Routes = [
    
    { path: 'category', component: CategoryListComponent }



    //{ path: 'category', redirectTo: '/category/list' },
    //{ path: 'categories/:id', redirectTo: '/category/:id' },
    //{ path: 'category/list',     component: CategoryListComponent },
    //{ path: 'category/:id', component: CategoryFormComponent }
    /** 
    {
        path: '', component: CategoryListComponent,
        children: [
            {
                path: '', component: CategoryListComponent,
                children: [
                    { path: 'category/:id',     component: CategoryFormComponent },
                    { path: '',                 component: CategoryListComponent }
                ]
            }
        ]
    }
    */
];

@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }