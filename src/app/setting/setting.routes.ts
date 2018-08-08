import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingFormComponent } from './setting-form/setting-form.component';


const settingRoutes: Routes = [
    { path: 'setting',                  component: SettingListComponent },
    { path: 'setting/form',             component: SettingFormComponent },
    { path: 'setting/form/:id',         component: SettingFormComponent }
];


@NgModule({
    imports: [RouterModule.forChild(settingRoutes)],
    exports: [RouterModule]
})
export class SettingRoutes { }
