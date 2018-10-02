import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const userRoutes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'form', component: UserFormComponent },
    { path: 'form/:id', component: UserFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutesRoutes { }
