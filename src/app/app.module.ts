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
import { LoginModule } from './login/login.module';


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
        //NgbModule.forRoot(),
        CategoryModule,
        DashboardModule,
        SubCategoryModule,
        ProductModule,
        LoginModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
