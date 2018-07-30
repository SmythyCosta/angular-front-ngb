import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { ProductComponent }         from './product.component';


const productRoutes: Routes = [
    { path: 'product',              component: ProductComponent }
    //{ path: 'category/form',        component: CategoryFormComponent },
    //{ path: 'category/form/:id',    component: CategoryFormComponent }
];


@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductRoutes { }
