// ==================== default angular ====================
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// ==================== integrations ====================
import { UserRoutesRoutes } from './user-routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from '../_services/user.service';
import { DirectivasModule } from '../_directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivasModule,
        UserRoutesRoutes
    ],
    declarations: [UserListComponent, UserFormComponent],
    exports: [UserListComponent, UserFormComponent],
    providers:[
        UserService
    ]   
})
export class UserModule { }
