import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';


import { CategoryService }   from '../_services/category.service';
import { CategoryInterface }   from '../interfaces/category.interface';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	categoryList: CategoryInterface[]; 

    constructor(
        private http:Http,
        private dataService:CategoryService
    ) { }

    ngOnInit() {}


    allCategory(){
        this.dataService.getAllCategory()
              .subscribe(data => { 
                            this.categoryList = data.cat; 
                        });
    }

    


}
