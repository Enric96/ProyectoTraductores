import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchTraductorComponent } from '../fetchTraductor/fetchTraductor.component';
import { TraductorService } from '../../services/traservice.service';
import { ServicioService } from '../../services/serservice.service';
import { IdiomaService } from '../../services/idiservice.service';
import { usuario } from '../addTraductor/addTraductor.component'
@Component({
    selector: 'addtraidiser',
    templateUrl: './addTraIdiSer.component.html',
    styleUrls: ['./addTraIdiSer.component.css']
})
export class AddTraIdiSerComponent {

    //Listas
    public serList: ServicioData[];
    public idiList: IdiomaData[];
    //Formulario
    IdiserForm: FormGroup;
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _TraductorService: TraductorService, private _ServicioService: ServicioService,
        private _IdiomaService: IdiomaService, private _router: Router) {
        this.getServicio();
        this.getIdioma();
        this.getTraductorID();
    }

    //Ver todos los servicios
    getServicio() {
        this._ServicioService.getServicios().subscribe(
            data => this.serList = data
        )
    }

    //Ver todos los idiomas
    getIdioma() {
        this._IdiomaService.getIdioma().subscribe(
            data => this.idiList = data
        )
    }

    //Obtener id del traductor con usuario
    getTraductorID() {
        this._TraductorService.getTraductorId(usuario).subscribe(
            data => this.id = data
        )
    }

    //Boton cancelar (ir ahome)
    cancelar() {
        this._router.navigate(['/index']);
    }

    //Boton aceptar añade idiomas y servicios al traductor
    enviar() {
        //this._TraductorService.deleteIdiomasHabla(this.id)
        //    .subscribe((data) => {
        //        this.getTraductorID();
        //    });
        //this._TraductorService.deleteServiciosHabla(this.id)
        //    .subscribe((data) => {
        //        this.getTraductorID();
        //    });

        //Lectura checkboxs
        var idioma = <any>document.getElementsByClassName("chkbxi");
        var servicio = <any>document.getElementsByClassName("chkbxs");

        //Recorre checkbox idioma
            for (var i = 0; i < idioma.length; i++) {
                var idi = idioma[i];
                if (idi.checked) {
                    this._TraductorService.saveTraductorIdioma(idi.value, this.id).subscribe((data) => {
                    })
                }
            }

        //Recorre checkboxs servicio
            for (var s = 0; s < servicio.length; s++) {
                var ser = servicio[s];
                if (ser.checked) {
                    this._TraductorService.saveTraductorServicios(ser.value, this.id).subscribe((data) => {
                    })
                }
            }
        this._router.navigate(['/index']);
    }
}

//Lista datos servicios
interface ServicioData {
    id: number;
    servicio: string;
}

//Lista datos idioma
interface IdiomaData {
    id: number;
    idioma: string;
}