// ==================== default angular ====================
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

// ==================== libs ====================
import { DataTablesModule } from 'angular-datatables';

// ==================== integrations ====================
import { UserRoutesRoutes } from './user-routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from '../_services/user.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTablesModule,
        UserRoutesRoutes
    ],
    declarations: [UserListComponent, UserFormComponent],
    exports: [UserListComponent, UserFormComponent],
    providers:[
        UserService
    ]   
})
export class UserModule { }
