import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const dashboardRoutes: Routes = [
    //{ path: 'dashboard',        redirectTo: '/dashboard', pathMatch: 'full' },
];


@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DasboardRoutes { }
