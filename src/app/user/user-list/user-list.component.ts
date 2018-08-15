import { Component, OnInit } from '@angular/core';

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

    
    constructor(
    ) { }


    ngOnInit() {
    }
    

}
