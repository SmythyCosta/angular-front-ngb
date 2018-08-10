import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}