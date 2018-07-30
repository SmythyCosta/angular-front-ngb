import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { ReactiveFormsModule }          from '@angular/forms';

import { ProductComponent }     from './product-list/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService }       from '../../_services/index';
import { ProductRoutes }        from './product.routes';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductRoutes
    ],
    declarations: [
        ProductComponent, ProductFormComponent
    ],
    exports: [ ProductComponent, ProductFormComponent ],
    providers: [ProductService]
})
export class ProductModule { }
