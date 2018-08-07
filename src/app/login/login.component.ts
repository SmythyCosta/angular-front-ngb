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
    
    username: string;
    password: string;
    token:string;
    textMesg:any;
    show: boolean = false;
    
    model: any = {};
    
    loading = false;
    returnUrl: string;
    setting = {image:''};

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        private http:Http,
        private dataService:AuthenticationService,
        private setingService:SettingService,
        private alertService: AlertService
    ){}

    ngOnInit() { 
        
        /**
         * Checando se existe no localStorage
         * o token do usuario armazenado.
         */
        if (localStorage.getItem('currentUser') !=null) {
            //this.router.navigate(['/dashboard']);
        }

        /**
         * Chama a imagem da App
        */ 
        this.setingService.getSettingData()
            .subscribe(data => { 
                        this.setting = {image:data.setting.image} 
                        
                        console.log(this.setting);                       
            });
    
    }

    /**
     * Efetua o procedimento de
     * Autenticação.
     */
    onLoggedin() {
    
    	this.loading = true;
	    
        var UserInput = {
        	'email': this.model.username,
	    	'password': this.model.password
	    };
      
        if(this.model.username !=undefined  && this.model.password != undefined){
	        this.dataService.login(UserInput)
	            .subscribe(
	                data => {
	                    if(data.status==400){
    	                  	this.show = true;
    	                  	this.textMesg = data.mesg;
    	                    this.loading = false;
                        }else if(data.status==500){
                            this.show = true;
                            this.textMesg = data.mesg;
                            this.loading = false;
                        }else if(data.status==300){
                            this.show = true;
                            this.textMesg = data.mesg;
                            this.loading = false;
	                    }else{
                            this.router.navigate(['/dashboard']);
	                    }
	              },
	              error => {
	                    this.alertService.error(error);
	              });
        }
    
    }

}