import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap }            from 'rxjs/operators';
import { Http }                 from '@angular/http';
import { ProductService }       from '../../_services/index.service';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    constructor(
        public router: Router,
        private routeParams: ActivatedRoute,
        private http: Http,
        private dataService: ProductService
    ) { }

    ngOnInit() {
        
    }

}
