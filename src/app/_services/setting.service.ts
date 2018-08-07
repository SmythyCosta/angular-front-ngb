import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class SettingService {

    private pathApi: String = 'http://localhost:8000';

    constructor(private http: Http){
    }

    getSettingData() {
        return this.http.get(this.pathApi+'/api/get-setting-data').map((response: Response) => response.json());
    }

    settingUpdate(data){
    	return this.http.post(this.pathApi+'/api/setting-data-update',data).map((response: Response) => response.json());
    }

}