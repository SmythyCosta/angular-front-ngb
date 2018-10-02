import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingFormComponent } from './setting-form/setting-form.component';
import { SettingRoutes } from './setting.routes';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SettingRoutes
	],
	declarations: [SettingFormComponent],
	exports: [SettingFormComponent]
})
export class SettingModule { }
