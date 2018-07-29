import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    
    //{ path: 'dashboard',        redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',        redirectTo: '/dashboard' },
    { path: 'category',         redirectTo: '/category' },
    { path: 'sub-category',     redirectTo: '/sub-category' },
    //{ path: '**',               redirectTo: '/dashboard' }

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutes { }
