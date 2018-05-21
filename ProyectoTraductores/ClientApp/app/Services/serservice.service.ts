import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class ServicioService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    /**
     SERVICIOS
     */

    //Ver todos los servicios
    getServicios() {
        return this._http.get(this.myAppUrl + 'api/Servicio/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Añadir servicio
    saveServicio(servicios) {
        return this._http.post(this.myAppUrl + 'api/Servicio/Create', servicios)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Borrar servicio
    deleteServicio(servicios) {
        return this._http.delete(this.myAppUrl + "api/Servicio/Delete/" + servicios)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //ERROR
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}