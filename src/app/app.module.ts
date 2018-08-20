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
import { AppComponent } from './app.component';


// #################### [ Helpers ] ####################
import { AlertService, AuthenticationService, AppService ,SettingService} from './_services/index';
import { customHttpProvider } from './_helpers/index';
import { AuthGuard } from './_guards/index';




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
        AuthGuard,
        AlertService,
        AuthenticationService,
        SettingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
