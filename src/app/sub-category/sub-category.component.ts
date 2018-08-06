import { Component, OnInit, TemplateRef }    from '@angular/core';
import { Router }               from '@angular/router';
import { Http }                 from '@angular/http';
import { Subject }              from 'rxjs/Rx';
import { SubCategoryService }   from '../_services/sub-category.service';
import { subCategoryInterface } from '../_interfaces/sub-category.interface';
import $ from 'jquery/dist/jquery';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';



@Component({
    selector: 'app-sub-category',
    templateUrl: './sub-category.component.html',
    styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

    //modal
    public modalRef: BsModalRef; // {1}
    public info:String;
    public modelDelete: String;

    public subCategoryList: subCategoryInterface[];
    public countJson:number;

    dtOptions: DataTables.Settings = {}; //  DataTable
    dtTrigger = new Subject();           //  DataTable


    constructor(
        public router: Router,
        private http: Http,
        private dataService: SubCategoryService,
        private modalService: BsModalService
    ) { }


    ngOnInit() {

        this.dtOptions = {
            pagingType: 'full_numbers'
          };

        this.allSubCategory();
    }

    /**
     * @param template 
     * Modal Bootstrap
     */
    public openModal(template: TemplateRef<any>, info, id) {
        this.modalRef = this.modalService.show(template); // {3}
        this.info = info;
        this.modelDelete = id;
    }

    /**
     * @returns
     * All Entity
     */
    allSubCategory() {
        this.dataService.getAllSubCategory()
            .subscribe(data => {
                this.subCategoryList = data.subCat;
                this.dtTrigger.next(); // Data Table
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
                    this.dtTrigger = new Subject(); //  DataTable
                    this.allSubCategory();
                    alert('Delete successful');
                    //this.router.navigate(['/sub-category']);
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
