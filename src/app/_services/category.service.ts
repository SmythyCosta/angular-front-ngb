import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class CategoryService {

    constructor(private http: Http) { }

    save(data) {
        return this.http.post('http://localhost:8000/api/category-save', data);
    }

    getAllCategory() {
        return this.http.get('http://localhost:8000/api/get-all-category-by-grid').map((response: Response) => response.json());
    }

    getCategory(id) {
        return this.http.post('http://localhost:8000/api/get-category', { id: id }).map((response: Response) => response.json());
    }

    categoryUpdate(data) {
        return this.http.post('http://localhost:8000/api/category-update', data);
    }

    categoryDelete(id) {
        return this.http.post('http://localhost:8000/api/category-delete', { id: id });
    }

}
