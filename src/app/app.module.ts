import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CategoryComponent } from './category/category.component';
import { CategoryService } from './_services/category.service';

import { SubCategoryService } from './_services/sub-category.service';




@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [CategoryService, SubCategoryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
