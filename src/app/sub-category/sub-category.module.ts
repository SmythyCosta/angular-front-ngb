import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './sub-category.component';
import { SubCategoryRoutes } from './sub-category.routes';


@NgModule({
    imports: [
        CommonModule,
        SubCategoryRoutes
    ],
    declarations: [SubCategoryComponent],
    exports: [SubCategoryComponent]
})
export class SubCategoryModule { }
