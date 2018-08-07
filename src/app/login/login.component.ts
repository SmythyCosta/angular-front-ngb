import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@angular/http";
import { AuthenticationService } from "../_services/authentication.service";
import { SettingService } from "../_services/setting.service";
import { AlertService } from "../_services/alert.services";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls : ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    constructor(
        private route: ActivatedRoute,
        public router: Router,
        private http:Http,
        private dataService:AuthenticationService,
        private setingService:SettingService,
        private alertService: AlertService
    ){}

    ngOnInit() {
    }

}