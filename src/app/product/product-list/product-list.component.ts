import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { ProductInterface } from '../../_interfaces/product.interface';
import { ProductService }   from '../../_services/product.service';
import { CategoryService }  from '../../_services/category.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public productList: ProductInterface[];
    //categoryList = {};
    categoryList:Object[] = [];

    constructor(
        public router: Router,
        private http: Http,
        private dataService: ProductService,
        private dataSericeCategory: CategoryService
    ) { }


    ngOnInit() {
        //this.allCategory();
        //console.log(this.categoryList);


        /*
        * Test Call API
        */
        let stream = this.http.get('http://127.0.0.1:8000//api/all-product');
        stream.map(res => res.json())
        .subscribe(categoryList => {
            this.categoryList = categoryList;
            console.log(this.categoryList);
        }, error => console.log(error));
        // ================ End Testing ==============
    }


    allProduct() {
        this.dataService.getAllProduct()
            .subscribe(data => {
                this.productList = data.product;
            });
    }

    allCategory(){
        this.dataSericeCategory.getAllCategory()
            .subscribe( data => { 
                this.categoryList = data.cat;
        });
    }

}
