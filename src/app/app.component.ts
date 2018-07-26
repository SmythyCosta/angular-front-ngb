import { Component } from '@angular/core';
//import { Http } from '@angular/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Dashboard - FrontEnd Angular Ecommerce';
    categoryList:Object[] = [];

    constructor(http:Http){

        let stream = http.get('http://127.0.0.1:8000/api/v1/get-all-category-by-grid');

        
        stream.map(res => res.json())
        .subscribe(categoryList => {
            this.categoryList = categoryList;
            console.log(this.categoryList);
        }, error => console.log(error));
        

        /** 
        stream.subscribe(res => {
            this.categoryList = res.json();
            console.log(this.categoryList);
        });
        */
        



        /** 
        stream.map((response: Response) => console.log(response.json()));
        */

        /** 
        allCategory(){
            this.dataService.getAllCategory()
                  .subscribe(data => { 
                                this.categoryList = data.cat; 
                            });
          }
        */
        

    }

}
