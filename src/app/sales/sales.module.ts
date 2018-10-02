import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//import { ProductListComponent } from './product-list/product-list.component';
//import { ProductFormComponent } from './product-form/product-form.component';
//import { ProductService } from '../_services/product.service';
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
    ],
    exports: [ 
        //ProductListComponent, ProductFormComponent 
    ],
    providers: [
        //ProductService
    ]
})
export class SalesModule { }
