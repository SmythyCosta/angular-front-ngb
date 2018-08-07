import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login.component';


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
    providers: []
})
export class LoginModule { }
