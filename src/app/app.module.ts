import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

//Components
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
    declarations: [
        AppComponent, CategoryComponent
    ],
    imports: [
        BrowserModule, AppBootstrapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
