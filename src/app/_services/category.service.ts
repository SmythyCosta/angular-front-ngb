import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {

    constructor(private http: Http) { }

    save(data) {
        return this.http.post('http://127.0.0.1:8000/api/v1/category-save', data);
    }

    getAllCategory() {
        return this.http.get('http://127.0.0.1:8000/api/v1/get-all-category-by-grid').map((response: Response) => response.json());
    }

    getCategory(id) {
        return this.http.post('http://127.0.0.1:8000/api/v1/get-category', { id: id }).map((response: Response) => response.json());
    }

    categoryUpdate(data) {
        return this.http.post('http://127.0.0.1:8000/api/v1/category-update', data);
    }

    categoryDelete(id) {
        return this.http.post('http://127.0.0.1:8000/api/v1/category-delete', { id: id });
    }

}
