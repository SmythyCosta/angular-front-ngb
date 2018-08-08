import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingFormComponent } from './setting-form/setting-form.component';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingRoutes } from './setting.routes';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutes
  ],
  declarations: [ SettingFormComponent, SettingListComponent],
  exports:[ SettingFormComponent, SettingListComponent]
})
export class SettingModule { }
