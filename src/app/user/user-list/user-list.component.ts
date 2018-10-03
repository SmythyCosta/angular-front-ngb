import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { UserService } from '../../_services/user.service';
import { AlertService } from '../../_services';
import { UserInterface } from '../../_interfaces/user.interface';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    public titlePage: String = "User";
    public countJson: number;
    userList: UserInterface[] = [];

    constructor(public router: Router,
                private dataService: UserService,
                private alertService: AlertService
                ) {}

    ngOnInit() {
        this.allUser();
    }

    /**
     * Carrega todos dados de Entity
     * @returns Objto Json
     */
    allUser() {
        this.dataService.getAlluser()
            .pipe().subscribe(data => {
                this.userList = data['user'];
                this.countJson = this.lengthJson(this.userList);
            });
    }

    /**
     * Deleta Entity
     * @param obj{id}
    */
    delete(id) {
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
