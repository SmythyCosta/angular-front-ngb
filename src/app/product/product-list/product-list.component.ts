import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { ProductInterface } from '../../_interfaces/product.interface';
import { ProductService }   from '../../_services/product.service';
import { CategoryService }  from '../../_services/category.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

    public productList: ProductInterface[];
    public countJson: number;

    constructor(
        public router: Router,
        private http: Http,
        private dataService: ProductService
    ) { }

    ngOnInit() {
        this.allProduct();
    }

    /**
     * Carrega todos dados de Entity
     * @returns Objto Json
     */
    allProduct() {
        this.dataService.getAllProduct()
            .subscribe(data => {
                this.productList = data.product;
                this.countJson = this.lengthJson(this.productList);
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
