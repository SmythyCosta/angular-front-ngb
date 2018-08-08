import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { SubCategoryComponent }         from './sub-category.component';
import { SubCategoryFormComponent }     from './sub-category-form.component';
import { SubCategoryService }           from '../_services/sub-category.service';
import { SubCategoryRoutes }            from './sub-category.routes';
import { DataTablesModule }             from 'angular-datatables';
import { AlertService }                 from '../_services/alert.services';
import { DirectivasModule } from '../_directives/directives.module';
//import { AlertComponent }               from '../_directives/alert.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTablesModule,
        DirectivasModule,
        SubCategoryRoutes
    ],
    declarations: [SubCategoryComponent, SubCategoryFormComponent],
    exports: [SubCategoryComponent, SubCategoryFormComponent],
    providers: [SubCategoryService, AlertService]
})
export class SubCategoryModule { }
