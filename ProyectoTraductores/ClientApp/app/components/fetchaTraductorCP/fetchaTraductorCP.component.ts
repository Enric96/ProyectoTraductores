import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traservice.service'
import { FormGroup } from '@angular/forms';
import { logregComponent } from '../logreg/logreg.component';
import { IndexComponent } from '../index/index.component';
import { codpos, idioma, servicio } from '../index/index.component';
@Component({
    selector: 'fetchaTraductorCP',
    templateUrl: './fetchaTraductorCP.component.html',
    styleUrls: ['./fetchaTraductorCP.component.css']
}) 
export class FetchaTraductorCPComponent {

    //Lista
    public tracpList: TraductorData[];
    constructor(public http: Http, private _router: Router, private _TraductorService: TraductorService) {
        this.getaTraductor();
    }

    //Ver taductor que coincida CP-Idioma-Servicio
    getaTraductor() {
        this._TraductorService.getaTraductorByCpIdiSer(codpos, idioma, servicio).subscribe(
            data => this.tracpList = data
        )
    }

    enviar(idTraductor, idIdioma, idServicios) {
        this._router.navigate(['\PeticionTraductor', idTraductor, idIdioma, idServicios]);
    }
}

//Lista datos Traductor
interface TraductorData {
    idTraductor: number;
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    telefono: string;
    cp: string;
    idioma: string;
    idIdioma: number;
    servicio: string;
    idServicios: number;
    imagen: string;
}