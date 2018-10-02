import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SalesComponent } from './sales/sales.component';
import { SalesRoutes } from './sales.routes';
import { DirectivasModule } from '../_directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivasModule,
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
        //ProductService
    ]
})
export class SalesModule { }
