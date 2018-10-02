// #################### [ Default Anglar ] ####################
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// #################### [ Modules ] ####################
import { AppBootstrapModule } from './_app-bootstrap/app-bootstrap.module';
import { AppRoutes } from './app.routes';
import { DirectivasModule } from './_directives/directives.module'

// #################### [ Layouts ] ####################
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout.component';
import { AlertComponent } from './_directives/index';
import { LoginComponent } from './login/login.component';

// #################### [ Helpers ] ####################
import { AlertService, AuthenticationService, AppService ,SettingService} from './_services/index';
import { customHttpProvider } from './_helpers/index';
import { AuthGuard } from './_guards/index';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppBootstrapModule,
        DirectivasModule,
        AppRoutes
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        LoginComponent
    ],
    providers: [ 
        AppService, 
        customHttpProvider, 
        AuthGuard,
        AlertService,
        AuthenticationService,
        SettingService
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
