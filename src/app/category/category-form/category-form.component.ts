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

    public titlePage:String = "Category";
    public titleBarNavegation:String = "Add";

    cat = {};
    getCat = {
        id:'',
        name: '',
        description: '',
        status: ''
    };
    
    constructor(public  router: Router,
                private routeParams: ActivatedRoute,
                private http:Http,
                private dataService:CategoryService
                ) {}

    ngOnInit() {
        this.checkIssetID();
    }

    /**
     * Salva ou atualiza dados
     * @param val 
     */
    save(val){
        if(val.id==undefined){
		    this.dataService.save(this.cat)
                .subscribe( data => {
                    alert('Category Create successful');
                    this.cat = {};
                },error => {
                    alert('Error in Category');
                });
        }else{
		    this.dataService.categoryUpdate(this.cat)
                .subscribe(data => {
                    alert('Category Update successful');
                    this.router.navigate(['/category']);
                },error => {
                    alert('Error in Category Update');
                });
        }
    }
    
    /**
     * buscar os dados que deveram 
     * ser editados
     * @param id 
     * @returns Object this.cat
     */
    edit(id){
        this.dataService.getCategory(id)
            .subscribe(data => { this.getCat = data.cat; 
                this.cat = {
                    id:this.getCat.id,
                    category:this.getCat.name,
                    description:this.getCat.description,
                    status:this.getCat.status
                };
            });
    }

    /**
     * Verifica se existe ID
     * na rota.
     * sim => edit
     * nao => new
     */
    checkIssetID(){
        this.routeParams.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.titleBarNavegation = "Edit";
                this.edit(id);
            }
        });
    }
    
}
