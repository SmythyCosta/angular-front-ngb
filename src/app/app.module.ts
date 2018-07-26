import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Modulos
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppRoutingModule } from './app.routes';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';

//Components
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, AppBootstrapModule, HttpModule, CategoryModule, SubCategoryModule, AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
