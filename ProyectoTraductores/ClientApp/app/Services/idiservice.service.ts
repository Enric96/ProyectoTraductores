import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class IdiomaService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    /**
     IDIOMA
     */

    //Ver todos los idiomas
    getIdioma() {
        return this._http.get(this.myAppUrl + 'api/Idioma/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    } 

    //Añadir idioma
    saveIdioma(idiomas) {
        return this._http.post(this.myAppUrl + 'api/Idioma/Create', idiomas)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Borrar idioma
    deleteIdioma(idioma) {
        return this._http.delete(this.myAppUrl + "api/Idioma/Delete/" + idioma)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //ERROR
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}