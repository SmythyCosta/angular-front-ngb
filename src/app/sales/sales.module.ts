import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SalesComponent } from './sales/sales.component';
import { SalesRoutes } from './sales.routes';
import { DirectivasModule } from '../_directives/directives.module';
import { SalesService } from '../_services';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivasModule,
        NgbModule.forRoot(),
        SalesRoutes
    ],
    declarations: [
        //ProductListComponent, ProductFormComponent
        SalesComponent
    ],
    exports: [ 
        //ProductListComponent, ProductFormComponent 
    ],
    providers: [
        SalesService
    ]
})
export class SalesModule { }
