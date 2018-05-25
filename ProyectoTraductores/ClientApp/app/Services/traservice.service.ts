import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class TraductorService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    /*
     TRADUCTORES
     */

    //Ver todos los traductores
    getTraductor() {
        return this._http.get(this.myAppUrl + 'api/Traductor/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Ver un traductor (perfil)
    getaTraductorByUsuario(usuario: string, contrasena: string) {
        return this._http.get(this.myAppUrl + "api/Traductor/Details2/" + usuario + "," + contrasena)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Buscar un traductor con CP-Idioma-Servicio
    getaTraductorByCpIdiSer(cp: string, idioma: string, servicio: string) {
        return this._http.get(this.myAppUrl + "api/Traductor/Details3/" + cp + "," + idioma + "," + servicio)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Ver un traductor a traves del id
    getTraductorById(id: number) {
        return this._http.get(this.myAppUrl + "api/Traductor/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Obtener id de traductor a traves del usuario
    getTraductorId(usuario: string) {
        return this._http.get(this.myAppUrl + "api/Traductor/Detailsverid/" + usuario)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Peticion de traductor
    savePeticion(peticion) {
        return this._http.post(this.myAppUrl + 'api/Traductor/Peticion', peticion)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Ver Peticiones
    getPeticiones(idTraductor: string) {
        return this._http.get(this.myAppUrl + 'api/Traductor/VerPeticion/' + idTraductor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Eliminar peticion
    deletePeticion(id) {
        return this._http.delete(this.myAppUrl + "api/Traductor/ElimPeticion/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Añadir traductor (registro)
    saveTraductor(traductor) {
        return this._http.post(this.myAppUrl + 'api/Traductor/Create', traductor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Añadir idioma a un traductor
    saveTraductorIdioma(ididioma: number, idtraductor: number) {
        return this._http.get(this.myAppUrl + 'api/Traductor/Createidioma/' + ididioma + "," + idtraductor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Añadir servicio a un traductor
    saveTraductorServicios(idservicios: number, idtraductor: number) {
        return this._http.get(this.myAppUrl + 'api/Traductor/Createservicio/' + idservicios + "," + idtraductor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Ver los idiomas de un traductor (usuario)
    getIdiomasHabladosUsuario(usuario: string, contrasena: string) {
        return this._http.get(this.myAppUrl + 'api/Traductor/GetIdiomas/' + usuario + "," + contrasena)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Ver los idiomas de un traductor (id)
    getIdiomasHabladosconID(id: number) {
        return this._http.get(this.myAppUrl + 'api/Traductor/GetIdiomasconID/' + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Ver los servicios de un traductor (usuario)
    GetServiciosDeTraductorconUsuario(usuario: string, contrasena: string) {
        return this._http.get(this.myAppUrl + 'api/Traductor/GetServicios/' + usuario + "," + contrasena)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Ver los servicios de un traductor (id)
    getServiciosHabladosID(id: number) {
        return this._http.get(this.myAppUrl + 'api/Traductor/GetServiciosconID/' + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Actualizar traductor (editar traductor)
    updateTraductor(traductor) {
        return this._http.put(this.myAppUrl + 'api/Traductor/Edit', traductor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Borrar traductor
    deleteTraductor(id) {
        return this._http.delete(this.myAppUrl + "api/Traductor/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Borrar traductor de la tabla TraductoresIdiomas
    DeleteTraductorTraductoresIdiomas(id) {
        return this._http.delete(this.myAppUrl + "api/Traductor/DeleteIH/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Borrar idioma que habla un traductor
    DeleteIdiomaHablaTraductor(idtraductor, ididioma) {
        return this._http.delete(this.myAppUrl + "api/Traductor/DeleteTI/" + idtraductor + "," + ididioma)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Borrar serviciop que domina un traductor
    DeleteServicioDominaTraductor(idtraductor, idservicios) {
        return this._http.delete(this.myAppUrl + "api/Traductor/DeleteTS/" + idtraductor + "," + idservicios)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Borrar traductor de la tabla TraductoresServicios
    DeleteTraductorTraductoresServicios(id) {
        return this._http.delete(this.myAppUrl + "api/Traductor/DeleteSH/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Borrar idioma de la tabla TraductoresIdiomas
    DeleteIdiomasTraductoresIdiomas(id) {
        return this._http.delete(this.myAppUrl + "api/Traductor/DeleteHI/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    //Borrar servicio de la tabla TradictoresSevicios
    DeleteServiciosTraductoresServicios(id) {
        return this._http.delete(this.myAppUrl + "api/Traductor/DeleteHS/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}