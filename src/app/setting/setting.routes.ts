import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingFormComponent } from './setting-form/setting-form.component';

const settingRoutes: Routes = [
    { path: '', component: SettingFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(settingRoutes)],
    exports: [RouterModule]
})
export class SettingRoutes { }
