import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { ProductListComponent }     from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService }       from '../_services/product.service';
import { ProductRoutes }        from './product.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutes
    ],
    declarations: [
        ProductListComponent, ProductFormComponent
    ],
    exports: [ ProductListComponent, ProductFormComponent ],
    providers: [ProductService]
})
export class ProductModule { }
