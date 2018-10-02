import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertService, UserService, AppService } from '../../_services/index';

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
    @Input() allowMultiple: boolean;
    @Input() fileType: string;
    @Input() required: boolean;
    @Input() maxSizeInKb: number;
    @Output() onSelection = new EventEmitter<FileList>(); DisplayedText: string = "";
    
    fileList: any;
    userList: User[] = []; // Table Data list
    userAddForm: FormGroup;

    getUser = {
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        type: '',
        status: '',
        image: ''
    };

    user = {
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        type: '',
        status: '',
        image: ''
    };

    constructor(
        public router: Router,
        private routeParams: ActivatedRoute,
        private dataService: UserService,
        private alertService: AlertService,
        private AppService: AppService,
        private elementRef: ElementRef
    ) { }

    ngOnInit() {

        /**
         * Check id
         * Verifica qual o valor do id na URL
         */
        this.routeParams.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.edit(id);
            }
        });
        
        /**
         * FormGroup = productAddForm
         * https://angular.io/guide/reactive-forms
         * 7 - inputs
         * 1 - upload de arquivo
         */
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

    save(val) {
        this.insertAction(val);
    }

    insertAction(val) {

        let formData: FormData = new FormData();
        if (this.fileList != undefined) {
            let file: File = this.fileList[0];
            formData.append('file', file, file.name);
        }
        formData.append('name', this.user.name);
        formData.append('email', this.user.email);
        formData.append('phone', this.user.phone);
        formData.append('address', this.user.address);
        formData.append('password', this.user.password);
        formData.append('type', this.user.type);
        formData.append('status', this.user.status);

        if (val.id == undefined || val.id == '') {
            this.dataService.save(formData)
                .pipe().subscribe(data => {
                    if (data['status'] == 200) {
                        this.allUser();
                        this.alertService.success('User Create successful', true);
                    } else if (data['status'] == 300) {
                        this.alertService.success('User already exists', true);
                    }
                }, error => {
                    this.alertService.error(error);
                });
        } else {
            formData.append('id', val.id);
            this.dataService.userUpdate(formData)
                .pipe().subscribe(data => {
                    if (data['status'] == 200) {
                        this.allUser();
                        this.alertService.success('User Update successful', true);
                    } else if (data['status'] == 300) {
                        this.alertService.error('User already exists', true);
                    }
                }, error => {
                    this.alertService.error(error);
                });
        }
    }

    allUser() {
        this.dataService.getAlluser()
            .pipe().subscribe(data => {
                this.userList = data['user'];
            });
    }



}
