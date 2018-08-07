import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../_services/authentication.service';
import { SettingService } from '../_services/setting.service';
import { AlertService } from '../_services/alert.services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutes
    ],
    declarations: [
        LoginComponent
    ],
    exports: [ LoginComponent ],
    providers: [AuthenticationService, SettingService, AlertService]
})
export class LoginModule { }
