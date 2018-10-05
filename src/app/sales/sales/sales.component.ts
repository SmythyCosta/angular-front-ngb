import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl,NgModel,FormsModule  } from '@angular/forms';
import { AlertService, AppService, SalesService } from '../../_services/index';
import * as moment from 'moment';

import {NgbDateStruct,NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {

    sales:any;
    categoryList: any[] = [];
    subCat:any[] = [];
    productList:any[] = []; 

    salesAddForm = null;

    constructor(public router: Router,
        private http: Http,
        private alertService: AlertService,
        private dataService: SalesService,
        private AppService: AppService,
        private parserFormatter: NgbDateParserFormatter
    ) { }

    ngOnInit() {

        let d = new Date();
        let randomnumber = moment(d).format('YYMMDDHHmmss');
        let formatDate = moment(d).format('YYYY-MM-DD');
        let dateArry = formatDate.split('-');
        let setDate = { year: Number(dateArry[0]), month: Number(dateArry[1]), day: Number(dateArry[2]) };

        this.sales = {
			invoiceCode:randomnumber,
			customer: "",
			date: setDate,
			allCategory: "",
			subCategory: "",
			allProduct: "",
			subTotal: "",
			discount: "0",
			vat: "0",
			grandTotal:"",
			receivedAmount:"",
			due:"",
			paymentType:"0",
			products: [
				// {amount: 111.11, date: "Jan 1, 2016", final: false},
				// {amount: 222.22, date: "Jan 2, 2016", final: true}
				]
        }
        
        this.salesAddForm = new FormGroup({
			invoiceCode: new FormControl(''),
			customer: new FormControl('',Validators.compose([Validators.required])),
			date: new FormControl(''),
			allCategory: new FormControl('',Validators.compose([Validators.required])),
			subCategory: new FormControl(''),
			allProduct: new FormControl('',Validators.compose([Validators.required])),
			subTotal: new FormControl(''),
			discount: new FormControl(''),
			vat: new FormControl(''),
			grandTotal: new FormControl(''),
			receivedAmount: new FormControl('',Validators.compose([Validators.required])),
			due: new FormControl(''),
			paymentType: new FormControl(''),
			products: new FormArray([])
		});
    }

    /**
     * 
     */
    category() {
        this.dataService.getAllCategory()
            .subscribe(data => {
                this.categoryList = data.cat;
            });
    }

    /**
     * 
     * @param id 
     */
    selectCat(id){
		if(id > 0){
			this.dataService.getSubCategory(id)
                .subscribe(data => { 
                  this.subCat = data.subCat;
                  if(this.subCat.length==0){
                  	this.sales.subCategory = '';
                  }
            });
			this.categoryByProduct(1,id); //
		}
    }

    /**
     * 
     * @param key 
     * @param val 
     */
    categoryByProduct(key,val){
		this.dataService.getCategoryByProduct(key,val)
			.subscribe(data => { 
    				this.productList = data.product;
    				this.sales.allProduct='';
                });
    }
    
    /**
     * 
     * @param event 
     */
    selectsubCategory(event){
		if(event > 0){
			this.categoryByProduct(2,event);
		}
    }
    
    /**
     * 
     * @param event 
     */
    selectProduct(event){
		if(event > 0){
			this.dataService.getProductInfo(event)
				.subscribe(data => { 
					let item = data.product;
					var product = {id:item.id,serial_number: item.serial_number, name: item.name, quantity: 1,selling_price:item.selling_price,total:null};
					// add pay off to both the model and to form controls because I don't think Angular has any way to do this automagically yet
					this.sales.products.push(product);
					const control = <FormArray>this.salesAddForm.controls['products'];
					control.push(this.createFormGroupArray(product));
            	});
            	this.itemChange();
            	
		}
    }
    
    /**
     * 
     */
    itemChange(){
		let totalAmount=0;
		for (let key in this.sales.products) {
			this.sales.products[key].total = (this.sales.products[key].selling_price * this.sales.products[key].quantity);
			// keys.push({key: key, value: this.sales.products[key]});
			var num = Number(this.sales.products[key].total);
			totalAmount += num;
		}
		setTimeout(() => {
            this.sales.subTotal = totalAmount;
        });
        this.changeGrandTotal();
    }
    
    /**
     * 
     */
    changeGrandTotal(){
		setTimeout(() => {
			let subTotal = this.sales.subTotal;
			let discount = this.sales.discount;
			let vat = this.sales.vat;
			subTotal = subTotal-(subTotal/100*discount);
			let total = subTotal +(subTotal/100*vat);
			this.sales.grandTotal = total.toFixed(2);
			this.amountChange();
		});
    }
    
    /**
     * 
     */
    amountChange(){
		setTimeout(() => {
             let totalDue = this.sales.grandTotal - this.sales.receivedAmount;
             this.sales.due =  totalDue.toFixed(2);
        });
    }
    
    /**
     * 
     */
    createSales(){
		let date = this.parserFormatter.format(this.sales.date);
		this.sales.date=date;
		this.dataService.createSales(this.sales)
            .subscribe(data =>{
              this.alertService.success('Invoice Create successful', true);
              this.router.navigate(['sales-invoice-details/' + data.sales_id]);
            },error =>{
              this.alertService.error(error);
            });
	}

}
