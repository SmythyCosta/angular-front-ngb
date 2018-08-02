import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { CategoryService } from '../../_services/category.service';
import { CategoryInterface } from '../../_interfaces/category.interface';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    public categoryList: CategoryInterface[];
    public titlePage:String = "Category";

    constructor(
        public router: Router,
        private http: Http,
        private dataService: CategoryService
    ) { }


    ngOnInit() {
        this.allCategory();
    }


    allCategory() {
        this.dataService.getAllCategory()
            .subscribe(data => {
                this.categoryList = data.cat;
            });
    }


    delete(id) {
        this.dataService.categoryDelete(id)
            .subscribe(data => {
                if (data.status == 200) {
                    alert('Category Delete successful');
                    this.allCategory();
                } else {
                    alert('Category Assigned Product');
                }
            }, error => {
                alert(error);
            });
    }

}
