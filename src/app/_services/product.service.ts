import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class ProductService {

    private pathApi: String = 'http://localhost:8000';

    constructor(private http: Http) { }

    save(data) {
        return this.http.post(this.pathApi+'/api/product-save', data);
    }

    getAllProduct() {
        return this.http.get(this.pathApi+'/api/all-product').map((response: Response) => response.json());
    }

    getProduct(id) {
        return this.http.post(this.pathApi+'/api/get-product-details', { id: id }).map((response: Response) => response.json());
    }

    getCategory() {
        return this.http.get(this.pathApi+'/api/get-all-category').map((response: Response) => response.json());
    }

    getSubCategory(id) {
        return this.http.post(this.pathApi+'/api/get-cat-by-subCategory', { id: id }).map((response: Response) => response.json());
    }
    productUpdate(data) {
        return this.http.post(this.pathApi+'/api/product-update', data);
    }

    getProductInfo(id) {
        return this.http.post('/api/get-product-details', { id: id }).map((response: Response) => response.json());
    }

}
