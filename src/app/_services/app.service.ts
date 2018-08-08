import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    private pathApi: String = 'http://localhost:8000';

    constructor(private http: Http) { }

    checkLogin(token) {

        let bodyString  = token; // Stringify payload
        let headers     = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options     = new RequestOptions({ headers: headers });            // Create a request option
        
        return this.http.post(this.pathApi+'/api/get-user', bodyString, options).map((response: Response) => response.json());

    }

    profileUpdate(data) {
        return this.http.post(this.pathApi+'/api/user-profileUpdate', data).map((response: Response) => response.json());
    }

    updatePassword(data) {
        return this.http.post(this.pathApi+'/api/user-passwordUpdate', data).map((response: Response) => response.json());
    }

    getMenu() {
        return this.http.get(this.pathApi+'/api/get-all-menu').map((response: Response) => response.json());
    }

    checkPermission(val) {
        return this.http.post(this.pathApi+'/api/check-user-permission', { menu: val }).map((response: Response) => response.json());
    }

}
