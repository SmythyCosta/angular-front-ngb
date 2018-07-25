import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { CategoryModule } from './category/category.module';


//Components
import { AppComponent } from './app.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';



@NgModule({
    declarations: [
        AppComponent, SubCategoryComponent
    ],
    imports: [
        BrowserModule, AppBootstrapModule, CategoryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
