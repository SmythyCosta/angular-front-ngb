import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';


//Components
import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, AppBootstrapModule, CategoryModule, SubCategoryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
