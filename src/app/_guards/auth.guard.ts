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
        return false;
    }

}