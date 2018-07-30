import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Http }                 from '@angular/http';
import { SubCategoryService }   from '../_services/sub-category.service';
import { subCategoryInterface } from '../_interfaces/sub-category.interface';

@Component({
    selector: 'app-sub-category',
    templateUrl: './sub-category.component.html',
    styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

    public subCategoryList: subCategoryInterface[];

    constructor(
        public router: Router,
        private http: Http,
        private dataService: SubCategoryService
    ) { }


    ngOnInit() {
        this.allSubCategory();
    }


    allSubCategory() {
        this.dataService.getAllSubCategory()
            .subscribe(data => {
                this.subCategoryList = data.subCat;
            });
    }


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


}
