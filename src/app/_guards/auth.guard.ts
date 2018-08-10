import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AppService } from "../_services/app.service";
import { AlertService } from "../_services/alert.services";

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
    

        return false;
    }

}