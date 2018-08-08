import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SettingService } from '../../_services/setting.service';
import { AlertService } from '../../_services/alert.services';

@Component({
    selector: 'app-setting-form',
    templateUrl: './setting-form.component.html',
    styleUrls: ['./setting-form.component.css']
})
export class SettingFormComponent implements OnInit {

    settingAddForm: FormGroup;

    setting = {
        id: '',
        company_name: '',
        address: '',
        phone: '',
        email: '',
        currency: '',
        image: ''
    };

    @Input() allowMultiple: boolean;
    @Input() fileType: string;
    @Input() required: boolean;
    @Input() maxSizeInKb: number;
    @Output() onSelection = new EventEmitter<FileList>();
    DisplayedText: string = "";
    fileList: any;

    constructor(
        public router: Router,
        private http: Http,
        private dataService: SettingService,
        private alertService: AlertService,
        //private AppService: AppService,
    ) { }

    ngOnInit() {
    }

}
