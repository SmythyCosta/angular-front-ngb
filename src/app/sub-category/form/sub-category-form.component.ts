import { Component, OnInit }    from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap }            from 'rxjs/operators';
import { Http }                 from '@angular/http';
import { SubCategoryService, AlertService }   from '../../_services/index';

@Component({
    selector: 'app-sub-category-form',
    templateUrl: './sub-category-form.component.html',
    styleUrls: ['./sub-category-form.component.css']
})
export class SubCategoryFormComponent implements OnInit {
    
    public titlePage:String = "Sub Category";
    public titleBarNavegation:String = "Add";
    
    subCat = {};
    getSubCat = {
        id:'',
        category_id: '',
        name: '',
        description: '',
        status: ''
    };
    allCategory:Object[] = [];

    constructor(
        public  router: Router,
        private routeParams: ActivatedRoute,
        private http:Http,
        private dataService: SubCategoryService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.callSelectCategory();
        this.checkIssetID();
    }

    /**
     * Salva ou atualiza dados
     * @param val 
    */
    save(val){
        if(val.id==undefined){
		    this.dataService.save(this.subCat)
                .subscribe( data => {
                    this.alertService.success('Sub Category Create successful', true);
                    this.subCat = {};
                },error => {
                    this.alertService.error(error);
                    //this.alertService.error('Erro na aplicação');
                });
        }else{
		    this.dataService.subCategoryUpdate(this.subCat)
                .subscribe(data => {
                    this.alertService.success('Sub Category Update successful', true);
                },error => {
                    this.alertService.error(error);
                });
        }
    }
    
    /**
     * buscar os dados que deverão
     * ser editados
     * @param id 
     * @returns Object this.cat
     */
    edit(id){
        this.dataService.getSubCategory(id)
            .subscribe(data => { this.getSubCat = data.subCat; 
                this.subCat = {
                    id:this.getSubCat.id,
                    category:this.getSubCat.category_id,
                    subCategory:this.getSubCat.name,
                    description:this.getSubCat.description,
                    status:this.getSubCat.status
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

    /**
     *  Chamar a API do Select
     *  @returns categorias
     */
    callSelectCategory(){
        this.dataService.getCategory()
        .subscribe(data => { 
                this.allCategory = data.cat;
        });
    }

}
