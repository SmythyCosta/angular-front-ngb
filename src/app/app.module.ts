// #################### [ Default Anglar ] ####################
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// #################### [ Modules ] ####################
import { AppBootstrapModule } from './_app-bootstrap/app-bootstrap.module';
import { AppRoutes } from './app.routes';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { ProductModule } from './product/product.module';
import { LoginModule } from './login/login.module';
import { SettingModule } from './setting/setting.module';
import { DirectivasModule } from './_directives/directives.module';
//import { NgbModule }               from '@ng-bootstrap/ng-bootstrap';


// #################### [ Components ] ####################
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppBootstrapModule,
        //NgbModule.forRoot(),
        CategoryModule,
        DashboardModule,
        SubCategoryModule,
        ProductModule,
        SettingModule,
        LoginModule,
        DirectivasModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
    //exports:[AlertComponent]
})
export class AppModule { }
