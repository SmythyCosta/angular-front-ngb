import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AlertService, AppService } from '../../_services/index';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {

    constructor(public router: Router,
                private http:Http,
                private alertService: AlertService,
                private dataService:SalesService,
                private AppService:AppService,
                ){}
	
	ngOnInit() {
		
  }
  

  category(){
		this.dataService.getAllCategory()
			.subscribe(data => {
				this.categoryList = data.cat;
			});
	}
	
}
