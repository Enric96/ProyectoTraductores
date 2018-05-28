import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchTraductorComponent } from '../fetchTraductor/fetchTraductor.component';
import { TraductorService } from '../../services/traservice.service';
import { ServicioService } from '../../services/serservice.service';
import { IdiomaService } from '../../services/idiservice.service';
import { userlogin } from '../logreg/Logreg.component';
import { id } from '../fetchaTraductor/fetchaTraductor.component';
@Component({
    selector: 'addservicioadicional',
    templateUrl: './addservicioadicional.component.html',
    styleUrls: ['./addservicioadicional.component.css']
})
export class AddServicioAdicional {
    public servList: ServicioconData[];
    public serList: ServicioData[];
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _TraductorService: TraductorService, private _ServicioService: ServicioService,
        private _IdiomaService: IdiomaService, private _router: Router) {
        this.getServicios();
    }

    //Ver Servicios
    getServicios() {
        this._ServicioService.getServicios().subscribe(
            data => {
                this.serList = data;
                this.getaServicio();
            }
        )
    }

    getaServicio() {
        this._TraductorService.getServiciosHabladosID(id).subscribe(
            data => {
                this.servList = data;
                this.deshabilitarchkbx();
            }
        )
    }

    //Deshabilitar servicios ya introducidos anteriormente
    deshabilitarchkbx() {
        var servicio = <any>document.getElementsByClassName("chkbxs");
        for (var s = 0; s < servicio.length; s++) {
            for (var sc = 0; sc < this.servList.length; sc++) {
                var ser = servicio[s];
                if (ser.value == this.servList[sc].idServicio) {
                    ser.disabled = true;
                }
            }
        }
    }

    boton() {
        for (var sc = 0; sc < this.servList.length; sc++) {
            console.log(this.servList[sc].idServicio);
            }
    }

    //Guardar servicios nuevos
    enviar() {
        var servicio = <any>document.getElementsByClassName("chkbxs");
        for (var s = 0; s < servicio.length; s++) {
            var ser = servicio[s];
            if (ser.checked) {
                this._TraductorService.saveTraductorServicios(ser.value, id).subscribe((data) => {
                    this._router.navigate(['/fetcha-Traductor']);
                })
            }
        }
    }

    //Boton volver al perfil
    cancelar() {
        this._router.navigate(['/fetcha-Traductor'])
    }
}

//Lista servicios
interface ServicioData {
    id: number;
    servicio: string;
}

interface ServicioconData {
    idServicio: number;
    servicios: string;
}