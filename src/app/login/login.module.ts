import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routes';


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
