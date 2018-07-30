import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class CategoryService {

    private pathApi: String = 'http://localhost:8000';

    constructor(private http: Http) { }

    save(data) {
        return this.http.post(this.pathApi+'/api/category-save', data);
    }

    getAllCategory() {
        return this.http.get(this.pathApi+'/api/get-all-category-by-grid').map((response: Response) => response.json());
    }

    getCategory(id) {
        return this.http.post(this.pathApi+'/api/get-category', { id: id }).map((response: Response) => response.json());
    }

    categoryUpdate(data) {
        return this.http.post(this.pathApi+'/api/category-update', data);
    }

    categoryDelete(id) {
        return this.http.post(this.pathApi+'/api/category-delete', { id: id });
    }

}
