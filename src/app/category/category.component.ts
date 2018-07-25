import { Component, OnInit, Input } from '@angular/core';

import { CategoryInterface }   from '../interfaces/category.interface';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	categoryList: CategoryInterface[]; 

    constructor() { }

    ngOnInit() {}

}
