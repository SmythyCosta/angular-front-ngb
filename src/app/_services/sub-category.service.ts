import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class SubCategoryService {

    private pathApi: String = 'http://localhost:8000';

    constructor(private http: Http) { }

    save(data) {
        return this.http.post(this.pathApi+'/api/subCategory-save', data);
    }

    getAllSubCategory() {
        return this.http.get(this.pathApi+'/api/get-subCategoryGridData').map((response: Response) => response.json());
    }

    getCategory() {
        return this.http.get(this.pathApi+'/api/get-all-category').map((response: Response) => response.json());
    }


    getSubCategory(id) {
        return this.http.post(this.pathApi+'/api/get-subCategory', { id: id }).map((response) => response.json());
    }
    subCategoryUpdate(data) {
        return this.http.post(this.pathApi+'/api/subCategory-update', data);
    }

    subCategoryDelete(id) {
        return this.http.post(this.pathApi+'/api/subCategory-delete', { id: id });
    }

}
