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
    categoryList = {};

    

    constructor(
        public router: Router,
        private http: Http,
        private dataService: ProductService
    ) { }

    

    ngOnInit() {


        // ============================== Begin Testing ============================
        /*
        * Test Call API
        */
       /**
        let stream = this.http.get('http://127.0.0.1:8000/api/all-product');
        stream.map(res => res.json())
        .subscribe(data => {
            this.productList = data.product;

            console.log('API Call Values => ');
            console.log(this.productList);
        
        }, error => console.log(error));
        */
        //
        // ============================== End Testing ============================

        this.allProduct();

    }


    allProduct() {
        this.dataService.getAllProduct()
            .subscribe(data => {
                this.productList = data.product;
            });
    }

    /**
    delete(id) {
        this.dataService.productDelete(id)
            .subscribe(data => {
                if ( data.status == 200 ) {
                    alert('Product Delete successful');
                    this.allProduct();
                } else {
                    alert('Product Assigned Product');
                }
            }, error => {
                alert(error);
            });
    }
     */

}
