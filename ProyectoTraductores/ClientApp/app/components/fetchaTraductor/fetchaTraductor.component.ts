import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traservice.service'
import { FormGroup } from '@angular/forms';
import { logregComponent } from '../logreg/logreg.component';
import { userlogin, passlogin } from '../logreg/logreg.component';
import { RouterLink } from '@angular/router/src/directives/router_link';
//import { userlogin1, passlogin1 } from '../cerrarsesion/cerrarsesion.component';
@Component({
    selector: 'fetchaTraductor',
    templateUrl: './fetchaTraductor.component.html',
    styleUrls: ['./fetchaTraductor.component.css']
})
export class FetchaTraductorComponent {
    user: string;
    pass: string;
    public traList: TraductorData[];
    public serList: ServicioData[];
    public idiList: IdiomaData[];
    constructor(public http: Http, private _router: Router, private _TraductorService: TraductorService) {
        this.getaTraductor();
        this.getaServicios();
        this.getaIdiomas();
        this.getTraductorID();
        var id = 0;
    }

    //Ver los datos del traductor
    getaTraductor() {
        this._TraductorService.getaTraductorByUsuario(userlogin, passlogin).subscribe(
            data => this.traList = data
        )
    }

    //Ver los servicios que domina
    getaServicios() {
        this._TraductorService.GetServiciosDeTraductorconUsuario(userlogin, passlogin).subscribe(
            data => this.serList = data
        )
    }

    //Obtener id del traductor a partir del usuario
    getTraductorID() {
        this._TraductorService.getTraductorId(userlogin).subscribe(
            data => id = data
        )
        //id = this.id;
    }

    //Ver los idiomas que conoce
    getaIdiomas() {
        this._TraductorService.getIdiomasHabladosUsuario(userlogin, passlogin).subscribe(
            data => this.idiList = data
        )
    }

    //Eliminar idioma conocido
    deleteIdioma(idIdioma, idioma) {
        var ansi = confirm("¿Estás seguro que quieres eliminar " + idioma + " de tus idiomas?")
        if (ansi) {
            this._TraductorService.DeleteIdiomaHablaTraductor(id, idIdioma).subscribe((data) => {
                this.getaIdiomas();
            });
        }
    }

    //Eliminar servicio dominado
    deleteServicios(idServicio, servicios) {
        var anss = confirm("¿Estás seguro que quieres eliminar " + servicios + " de tus servicios?")
        if (anss) {
            this._TraductorService.DeleteServicioDominaTraductor(id, idServicio).subscribe((data) => {
                this.getaServicios();
            });
        }
    }
    //cerrses() {
    //    this._TraductorService.getaTraductorByUsuario(userlogin1, passlogin1).subscribe(
    //        data => this.traList = data
    //    )
    //}
}
export var id;
interface IdiomaData {
    idIdioma: number;
    idioma: string;
}
interface ServicioData {
    idServicio: number;
    servicios: string;
}
interface TraductorData {
    id: number;
    correoElectronico: string;
    usuario: string;
    contrasena: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    cp: string;
    imagen: string;
}