import { NgModule } from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';


const userRoutes: Routes = [
    { path: 'user',             component: UserListComponent },
    { path: 'user/form',        component: UserFormComponent },
    { path: 'user/form/:id',    component: UserFormComponent }
];


@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutesRoutes { }
