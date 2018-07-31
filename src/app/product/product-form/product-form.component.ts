import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product.service';


@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    subCat: any[] = [];

    constructor(
        private dataService: ProductService
    ) { }

    ngOnInit() {

    }

    selectCat(id) {
        this.dataService.getSubCategory(id)
            .subscribe(data => {
                this.subCat = data.subCat;
            });
    }

}
