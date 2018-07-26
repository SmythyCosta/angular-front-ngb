import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    title = 'FrontEnd - Angular Ecommerce';

    categoryList:Object[] = [];

    constructor(http:Http){

        let stream = http.get('http://127.0.0.1:8000/api/get-all-category-by-grid');

        stream.subscribe(res => {
            this.categoryList = res.json();
            console.log(this.categoryList);
        });

    }

}
