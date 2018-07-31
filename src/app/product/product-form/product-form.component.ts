import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product.service';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    subCat: any[] = [];
    product = {};

    fileList:any;

    productAddForm: FormGroup;

    constructor(
        public router: Router,
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


    save(val) {
        this.insertAction(val);
    }


    insertAction(val) {

        let formData: FormData = new FormData();
        if (this.fileList != undefined) {
            let file: File = this.fileList[0];
            formData.append('file', file, file.name);
        }
        formData.append('serial_number', this.productAddForm.value.serial_number);
        formData.append('name', this.productAddForm.value.name);
        formData.append('category', this.productAddForm.value.category);
        formData.append('subCategory', this.productAddForm.value.subCategory);
        formData.append('purchase_price', this.productAddForm.value.purchase_price);
        formData.append('selling_price', this.productAddForm.value.selling_price);
        formData.append('note', this.productAddForm.value.note);
        formData.append('status', this.productAddForm.value.status);

        if (val.id == undefined) {
            this.dataService.save(formData)
                .subscribe(data => {
                    this.product = {};
                    alert('Product Create successful');
                }, error => {
                    alert(error);
                });
        } else {
            formData.append('id', val.id);
            this.dataService.productUpdate(formData)
                .subscribe(data => {
                    alert('Product Update successful');
                    this.router.navigate(['/product']);
                }, error => {
                    alert(error);
                });
        }
    }

}
