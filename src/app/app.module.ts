// #################### [ Default Anglar ] ####################
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// #################### [ Modules ] ####################
import { AppBootstrapModule } from './_app-bootstrap/app-bootstrap.module';
import { AppRoutes } from './app.routes';


// #################### [ Layouts ] ####################
import { DashboardModule } from './dashboard/dashboard.module';
import { DirectivasModule } from './_directives/directives.module';


// #################### [ Components ] ####################




@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppBootstrapModule,
        AppRoutes
    ],
    providers: [ 
        AppService, 
        customHttpProvider, 
        AuthGuard
    ],
    bootstrap: [AppComponent]
    //exports:[AlertComponent]
})
export class AppModule { }
