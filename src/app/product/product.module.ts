import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { ReactiveFormsModule }          from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductService } from '../../_services/index';
import { ProductRoutes } from './product.routes';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductRoutes
    ],
    declarations: [
        ProductComponent,
    ],
    exports: [ProductComponent],
    providers: [ProductService]
})
export class ProductModule { }
