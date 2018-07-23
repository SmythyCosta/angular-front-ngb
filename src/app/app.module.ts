import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { CategoryComponent } from './category/category.component';
import { CategoryService } from './_services/category.service';

@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [CategoryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
