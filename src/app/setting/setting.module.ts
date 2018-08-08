import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingFormComponent } from './setting-form/setting-form.component';
import { SettingListComponent } from './setting-list/setting-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SettingFormComponent, SettingListComponent],
  exports:[ SettingFormComponent, SettingListComponent]
})
export class SettingModule { }
