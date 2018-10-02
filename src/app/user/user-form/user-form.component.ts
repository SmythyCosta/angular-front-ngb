import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AlertService, AppService } from '../../_services';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


class User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    type: number;
    status: number;
}

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {

    userAddForm :FormGroup;


    constructor(
        public router: Router,
        private dataService: UserService,
        private alertService: AlertService,
        private AppService: AppService,
        private elementRef: ElementRef
    ) { }

    ngOnInit() {

        // form validaion
        this.userAddForm = new FormGroup({
            name: new FormControl("", Validators.compose([Validators.required])),
            email: new FormControl("", Validators.compose([Validators.required])),
            phone: new FormControl("", Validators.compose([Validators.required])),
            address: new FormControl(""),
            password: new FormControl(""),
            type: new FormControl("", Validators.compose([Validators.required])),
            status: new FormControl(""),
        });


    }






}
