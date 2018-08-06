import { Component, OnInit }    from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap }            from 'rxjs/operators';
import { Http }                 from '@angular/http';
import { SubCategoryService }   from '../_services/sub-category.service';
import { AlertService } from '../_services/alert.services';

@Component({
    selector: 'app-sub-category-form',
    templateUrl: './sub-category-form.component.html',
    styleUrls: ['./sub-category-form.component.css']
})
export class SubCategoryFormComponent implements OnInit {
        
    subCat = {};
    
    getSubCat = {
        id:'',
        category_id: '',
        name: '',
        description: '',
        status: ''
      };

      allcategory:Object[] = [];
    

    constructor(
        public  router: Router,
        private routeParams: ActivatedRoute,
        private http:Http,
        private dataService: SubCategoryService,
        private alertService: AlertService
    ) { }

    ngOnInit() {

        this.dataService.getCategory()
          .subscribe(data => { 
    			  this.allcategory = data.cat;
          });

        this.routeParams.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.edit(id);
            }
        });
    }

    save(val){
        if(val.id==undefined){
		    this.dataService.save(this.subCat)
                .subscribe( data => {
                    this.alertService.success('Sub Category Create successful', true);
                    this.subCat = {};
                },error => {
                    this.alertService.error(error);
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
    

}
