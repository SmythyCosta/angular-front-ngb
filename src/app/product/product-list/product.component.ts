import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductInterface } from '../../_interfaces/product.interface';

import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ProductService } from '../../_services';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public productList: ProductInterface[];

    @Input() allowMultiple: boolean;
    @Input() fileType: string;
    @Input() required: boolean;
    @Input() maxSizeInKb: number;
    @Output() onSelection = new EventEmitter<FileList>();

    DisplayedText: string = "";

    fileList: any;
    pdf = false;
    exl = false;

    //dtOptions: DataTables.Settings = {}; //  DataTable
    dtTrigger = new Subject(); //  DataTable
    productAddForm: FormGroup;
    randomnumber = Math.floor(Math.random() * 100000000);

    getProduct = {
        id: '',
        serial_number: '',
        name: '',
        category_id: '',
        sub_category_id: '',
        purchase_price: '',
        selling_price: '',
        note: '',
        status: '',
        image: ''
    };

    closeResult: string; // Modal Close
    productInfo = {};


    constructor(
        public router: Router,
        private http: Http,
        private dataService: ProductService,
    ) { }

    product = {};
    //modalReference: NgbActiveModal;
    modalTitle: string;
    cat = {};
    subCat: any[] = [];
    setting = { currency: '' };
    showloding = true;
    lodingImage = false;

    ngOnInit() {
        this.allProduct();
    }


    /*
    * Return all Produts 
    */
    allProduct(){
        this.dataService.getAllProduct()
            .subscribe(
                data => { this.productList = data.product; 
                //this.dtTrigger.next(); // Data Table
                this.pdf = true;
                this.exl = true;
            });
      }

}
