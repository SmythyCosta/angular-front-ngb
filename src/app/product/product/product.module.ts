import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProductComponent } from './product.component';
import { ProductService } from '../../_services/index';
import { ProductRoutes } from './product.routes';

//import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        //DataTablesModule,
        ProductRoutes
    ],
    declarations: [
        ProductComponent
    ],
    exports: [ProductComponent],
    providers: [ProductService]
})
export class ProductModule { }
