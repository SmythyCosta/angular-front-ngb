import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { DashboardComponent }   from './dashboard.component';
import { DasboardRoutes }       from './dashboard.routes';


@NgModule({
    imports: [
        CommonModule,
        DasboardRoutes
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule { }
