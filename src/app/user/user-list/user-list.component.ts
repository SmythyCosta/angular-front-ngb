import { Component, OnInit, Input, Output, EventEmitter, ElementRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

//
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { AlertService } from '../../_services/alert.services';
import { AppService } from '../../_services/app.service';

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
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    public titlePage: String = "User";
    public countJson: number;

    @Input() allowMultiple: boolean;
    @Input() fileType: string;
    @Input() required: boolean;
    @Input() maxSizeInKb: number;
    @Output() onSelection = new EventEmitter<FileList>();

    DisplayedText: string = "";
    fileList: any;
    pdf = false;
    exl = false;

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

    userType = [{ id: 1, name: 'Admin' }, { id: 2, name: 'user' }];

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
        private dataService: UserService,
        private alertService: AlertService,
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

        this.allUser();
    }

    /**
     * 
     */
    allUser() {
        this.dataService.getAlluser()
            .pipe().subscribe(data => {
                this.userList = data['user'];
                this.countJson = this.lengthJson(this.userList);
                this.pdf = true;
                this.exl = true;
            });
    }

    /**
     * 
     * @param id 
     */
    delete(id) {

        // alert('Live Demo Button Not Working');
        //if (confirm('Are you sure?')) {
        this.dataService.userDelete(id)
            .pipe().subscribe(data => {
                this.allUser();
                this.alertService.success('User Delete successful', true);
            }, error => {
                this.alertService.error(error);
            });
        //}

    }

    /**
     * @param obj 
     * *********** tutorial ***********
     * length (data);           // returns pai
     * length (data.name_data)  // returns filho
    */
    lengthJson(obj) {
        //count elements
        return Object.keys(obj).length;
    }


}
