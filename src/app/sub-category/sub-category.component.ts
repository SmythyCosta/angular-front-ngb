import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Http }                 from '@angular/http';
import { SubCategoryService }   from '../_services/sub-category.service';
import { subCategoryInterface } from '../_interfaces/sub-category.interface';
import $ from 'jquery/dist/jquery';


@Component({
    selector: 'app-sub-category',
    templateUrl: './sub-category.component.html',
    styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

    public subCategoryList: subCategoryInterface[];
    public countJson:number;

    dtOptions: DataTables.Settings = {};

    constructor(
        public router: Router,
        private http: Http,
        private dataService: SubCategoryService
    ) { }


    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers'
          };
          
        this.allSubCategory();
    }

    /**
     * @returns
     * All Entity
     */
    allSubCategory() {
        this.dataService.getAllSubCategory()
            .subscribe(data => {
                this.subCategoryList = data.subCat;
                this.countJson = this.lengthJson(this.subCategoryList);
            });
    }

    /**
     * @param obj 
     * Delete Entity
     */
    delete(id) {
        this.dataService.subCategoryDelete(id)
            .subscribe(data => {
                if (data.status == 200) {
                    alert('SubCategory Delete successful');
                    this.allSubCategory();
                } else {
                    alert('SubCategory Assigned Product');
                }
            }, error => {
                alert(error);
            });
    }

    /**
     * @param obj 
     * *********** tutorial ***********
     * length (data);           // returns pai
     * length (data.name_data)  // returns filho
    */
    lengthJson(obj) {
        //count elements
        return Object.keys(obj).length;
    }


}
