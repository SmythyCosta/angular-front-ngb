import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { UserService } from '../../_services/user.service';
import { AlertService } from '../../_services';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    public titlePage: String = "User";
    public countJson: number;
    userList: User[] = [];

    constructor(
        public router: Router,
        private dataService: UserService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.allUser();
    }

    allUser() {
        this.dataService.getAlluser()
            .pipe().subscribe(data => {
                this.userList = data['user'];
                this.countJson = this.lengthJson(this.userList);
            });
    }

    delete(id) {
        //alert('Live Demo Button Not Working');
        //if (confirm('Are you sure?')) {
        //}
        this.dataService.userDelete(id)
            .pipe().subscribe(data => {
                this.allUser();
                this.alertService.success('User Delete successful', true);
            }, error => {
                this.alertService.error(error);
            });
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
