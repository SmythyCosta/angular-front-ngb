import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Http } from '@angular/http';
import { CategoryService } from '../../_services/category.service';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

    private isNew: boolean = true;
    cat = {};

    constructor(
        public router: Router,
        private routeParams: ActivatedRoute,
        private http:Http,
        private dataService:CategoryService
    ) { }

    ngOnInit() {

        /** 
        this.routeParams.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.isNew = false;

                this.contatoService.find(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }
        });
        */
    }

    save(val){
		if(val.id==undefined){
		    this.dataService.save(this.cat)
                .subscribe( data => {
                    alert('Category Create successful');
                    this.cat = {};
                },error =>{
                    alert('Error in Category');
                });
        }
        /**
        else{
		    this.dataService.categoryUpdate(this.cat)
                .subscribe(data => {
                    this.modalReference.close();
                    this.dtTrigger = new Subject(); //  DataTable
                    this.alertService.success('Category Update successful', true);
                    this.allCategory();
                },error => {
                    this.alertService.error(error);
                });
        }
         */
        
	}

}
