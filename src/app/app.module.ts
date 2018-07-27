import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HttpModule } from '@angular/http';

//Modulos
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppRoutingModule } from './app.routes';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';

//Components
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        AppRoutingModule, AppBootstrapModule, HttpModule,
        DashboardModule,
        CategoryModule, 
        SubCategoryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
