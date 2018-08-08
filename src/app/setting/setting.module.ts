import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingFormComponent } from './setting-form/setting-form.component';
import { SettingRoutes } from './setting.routes';
import { DirectivasModule } from '../_directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivasModule,
    SettingRoutes
  ],
  declarations: [ SettingFormComponent],
  exports:[ SettingFormComponent]
})
export class SettingModule { }
