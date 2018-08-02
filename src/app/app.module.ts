import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

//Modulos
import { AppBootstrapModule }   from './_app-bootstrap/app-bootstrap.module';
//import { NgbModule }               from '@ng-bootstrap/ng-bootstrap';
import { AppRoutes }            from './app.routes';
import { DashboardModule }      from './dashboard/dashboard.module';
import { CategoryModule }       from './category/category.module';
import { SubCategoryModule }    from './sub-category/sub-category.module';
import { ProductModule }        from './product/product.module';

import { DataTablesModule } from 'angular-datatables';


//Components
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppBootstrapModule,
        BrowserModule, 
        FormsModule,
        HttpModule,
        DataTablesModule,
        //NgbModule.forRoot(),
        CategoryModule,
        DashboardModule,
        SubCategoryModule,
        ProductModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
