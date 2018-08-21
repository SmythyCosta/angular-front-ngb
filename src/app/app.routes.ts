import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './layout/full-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';


export const appRoutes: Routes = [

    {   
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children:[
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
            { path: 'category', loadChildren: './category/category.module#CategoryModule', canActivate: [AuthGuard] },
            { path: 'subcategory', loadChildren: './sub-category/sub-category.module#SubCategoryModule', canActivate: [AuthGuard] },
            { path: 'product', loadChildren: './product/product.module#ProductModule', canActivate: [AuthGuard] },
            { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthGuard] }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'login'
        }
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutes { }
