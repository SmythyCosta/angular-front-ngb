import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ProductInterface } from '../../_interfaces/product.interface';
import { ProductService } from '../../_services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public productList: ProductInterface[];

    constructor(
        public router: Router,
        private http: Http,
        private dataService: ProductService
    ) { }


    ngOnInit() {
        this.allProduct();
    }


    allProduct() {
        this.dataService.getAllProduct()
            .subscribe(data => {
                this.productList = data.product;
            });
    }

}
