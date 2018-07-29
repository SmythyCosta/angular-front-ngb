import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    constructor(
        public router: Router,
        private http:Http,
        //private dataService:CategoryService,
    ) { }

    ngOnInit() { }

}
