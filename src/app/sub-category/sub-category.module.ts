import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './sub-category.component';
import { SubCategoryRoutes } from './sub-category.routes';
import { SubCategoryService } from '../_services/sub-category.service';


@NgModule({
    imports: [
        CommonModule,
        SubCategoryRoutes
    ],
    declarations: [SubCategoryComponent],
    exports: [SubCategoryComponent],
    providers: [SubCategoryService]
})
export class SubCategoryModule { }
