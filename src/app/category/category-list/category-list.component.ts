import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CategoryService } from '../../_services/category.service';
import { CategoryInterface } from '../../interfaces/category.interface';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    public categoryList:CategoryInterface[];

    constructor(
        public router: Router,
        private http:Http,
        private dataService:CategoryService
    ) { }

    ngOnInit() { 
        this.allCategory();
    }

    allCategory(){
        this.dataService.getAllCategory()
            .subscribe(data => {
                this.categoryList = data.cat;
            });
    }

}
