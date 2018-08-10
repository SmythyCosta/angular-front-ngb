import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { UserRoutesRoutes } from './user-routes';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutesRoutes
    ],
    declarations: [UserListComponent, UserFormComponent],
    exports: [UserListComponent, UserFormComponent],
    providers:[UserService]
})
export class UserModule { }
