import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthenticationService{
    
    private pathApi: String = 'http://localhost:8000';

    constructor(private http: Http) { }

    /**
     * @param data 
     * Faz o login do usuario.
     * Atenticação.
     * Desc: salva o o token no localStorage.
     */
    login(data) {
        return this.http.post(this.pathApi+'/api/user-login', data)
            .map((response: Response) => {
                
                // login successful if there's a jwt token in the response
                let user = response.json();
                
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    /**
     * Faz logout
     * Desc: Remove o toke do localStorage
     */
    logout() {
        localStorage.removeItem('currentUser');
    }
}