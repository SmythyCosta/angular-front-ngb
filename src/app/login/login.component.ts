import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@angular/http";

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
    ){}

    ngOnInit() {
    }

}