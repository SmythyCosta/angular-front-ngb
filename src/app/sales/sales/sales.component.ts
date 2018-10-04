import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AlertService, AppService, SalesService } from '../../_services/index';
import * as moment from 'moment';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {

    sales:any;
    categoryList: Object[] = [];

    constructor(public router: Router,
        private http: Http,
        private alertService: AlertService,
        private dataService: SalesService,
        private AppService: AppService,
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
    }


    category() {
        this.dataService.getAllCategory()
            .subscribe(data => {
                this.categoryList = data.cat;
            });
    }

}
