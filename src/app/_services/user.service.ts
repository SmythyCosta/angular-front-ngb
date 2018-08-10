import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http:Http) { }

    save(data){
        return this.http.post('/api/user-create',data).map((response: Response) => response.json());
    }

    getAlluser(){
        return  this.http.get('/api/all-user').map((response: Response) => response.json());
      }

    

}