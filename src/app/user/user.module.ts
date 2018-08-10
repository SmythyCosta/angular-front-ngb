import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { UserRoutesRoutes } from './user-routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutesRoutes
    ],
    declarations: [UserListComponent, UserFormComponent],
    exports: [UserListComponent, UserFormComponent],
    providers:[
    //    UserService
    ]   
})
export class UserModule { }
