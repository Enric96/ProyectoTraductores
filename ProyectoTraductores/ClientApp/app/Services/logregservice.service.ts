import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class LogregService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    /**
     LOGREG
     */

    //LOGIN
    saveLogreg(logreg) {
        return this._http.post(this.myAppUrl + 'api/Logreg/Create', logreg)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    //getLogregById(id: number) {
    //    return this._http.get(this.myAppUrl + "api/Logreg/Details/" + id)
    //        .map((response: Response) => response.json())
    //        .catch(this.errorHandler)
    //}

    //ERROR
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}