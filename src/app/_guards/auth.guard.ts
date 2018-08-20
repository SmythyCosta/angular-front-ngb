import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AppService } from "../_services/app.service";
import { AlertService } from "../_services/alert.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private AppService: AppService,
        private alertService: AlertService
    ){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        this.alertService.alertClose();
        let url = state.url.split("/")[1];
        let getToken = localStorage.getItem('currentUser');

        if(url !='login'){
            this.AppService.checkLogin(getToken)
                .subscribe(
                    data => {
                        if(data.status==400){
                            this.router.navigate(['/login']);
                        }
                    },
                    err => {
                        window.localStorage.removeItem('currentUser');
                        this.router.navigate(['/login']); 
                    }
                );

        }

        if (localStorage.getItem('currentUser') !=null) {
            if(url !='login'){
                this.AppService.checkPermission(url)
                .subscribe(data => { 
                  if(data.count==0){
                    this.router.navigate(['/dashboard']);
                  } 
                });
            }else{
                this.router.navigate(['/dashboard']);
            }
            
            // logged in so return true
            return true;

        }else{
            
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;

        }
        
    }

}