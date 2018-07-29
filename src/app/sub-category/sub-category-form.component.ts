import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Http } from '@angular/http';
import { SubCategoryService } from '../_services/sub-category.service';

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

      allcategory = {};
    

    constructor(
        public  router: Router,
        private routeParams: ActivatedRoute,
        private http:Http,
        private dataService: SubCategoryService
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
                    alert('SubCategory Create successful');
                    this.subCat = {};
                },error =>{
                    alert('Error in Category');
                });
        }else{
		    this.dataService.subCategoryUpdate(this.subCat)
                .subscribe(data => {
                    alert('SubCategory Update successful');
                    this.router.navigate(['/sub-category']);
                },error => {
                    alert('Error in SubCategory Update');
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
