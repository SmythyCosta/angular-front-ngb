import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HttpModule } from '@angular/http';

//Modulos
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppRoutes } from './app.routes';
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
        AppBootstrapModule,
        BrowserModule, 
        FormsModule,
        HttpModule,
        CategoryModule,
        DashboardModule,
        SubCategoryModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
