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
    public countJson:number;

    constructor(
        public router: Router,
        private http: Http,
        private dataService: CategoryService
    ) { }


    ngOnInit() {
        this.allCategory();
    }

    /**
     * @returns
     * All Categories
     */
    allCategory() {
        this.dataService.getAllCategory()
            .subscribe(data => {
                this.categoryList = data.cat;
                this.countJson = this.lengthJson(this.categoryList);
            });
    }

    /**
     * @param obj 
     * Delete
     */
    delete(id) {

        let result = confirm("Want to delete?");

        if (result) {
            //Logic to delete the items
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
        //else{
        //    alert('Could not delete');
        //}

    }

    /**
     * @param obj 
     * 
     * *********** tutorial ***********
     * length (data);           // returns pai
     * length (data.name_data)  // returns filho
     */
    lengthJson(obj) {
        return Object.keys(obj).length;
    }
    

}
