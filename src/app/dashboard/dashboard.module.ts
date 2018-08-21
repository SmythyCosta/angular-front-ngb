import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { DashboardComponent }   from './dashboard.component';
import { DasboardRoutes }       from './dashboard.routes';
import { DashboardService } from '../_services/index';


@NgModule({
    imports: [
        CommonModule,
        DasboardRoutes
    ],
    declarations: [DashboardComponent],
    providers: [DashboardService]
})
export class DashboardModule { }
