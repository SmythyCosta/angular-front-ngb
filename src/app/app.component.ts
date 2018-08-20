import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, SettingService } from './_services/';


@Component({
    // tslint:disable-next-line
    selector: 'body',
    template: '<router-outlet></router-outlet>'
  })
export class AppComponent {

    title = 'Dashboard - FrontEnd Angular Ecommerce';
    categoryList:Object[] = [];

    constructor(http:Http){

        //let stream = http.get('http://127.0.0.1:8000/api/get-all-category-by-grid');

        /**
        stream.map(res => res.json())
        .subscribe(categoryList => {
            this.categoryList = categoryList;
            console.log(this.categoryList);
        }, error => console.log(error));
         */
        

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
