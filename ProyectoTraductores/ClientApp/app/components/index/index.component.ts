import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchTraductorComponent } from '../fetchTraductor/fetchTraductor.component';
import { CPService } from '../../services/cpservice.service';
import { IdiomaService } from '../../services/idiservice.service';
import { ServicioService } from '../../services/serservice.service';
@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent {

    //Listas
    public idiList: IdiomaData[];
    public serList: ServicioData[];
    //Formulario
    CPForm: FormGroup;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _CPService: CPService, private _router: Router,
        private _IdiomaService: IdiomaService, private _ServicioService: ServicioService) {
        this.getIdioma();
        this.getServicio();
        this.CPForm = this._fb.group({

            //Verificar formulario de busqueda de traductor
            cp: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
            idioma: ['', [Validators.required]],
            servicio: ['', [Validators.required]]
        })

        //Crear variables
        var codpos = "";
        var idioma = "";
        var servicio = "";
    }

    //Ver todos los idiomas
    getIdioma() {
        this._IdiomaService.getIdioma().subscribe(
            data => this.idiList = data
        )
    }

    //Ver todos los servicios
    getServicio() {
        this._ServicioService.getServicios().subscribe(
            data => this.serList = data
        )
    }

    //Buscar Traductor con CP-Idioma-Servicio
    buscar() {
        if (!this.CPForm.valid) {
            return;
        }
        codpos = this.CPForm.value.cp;
        idioma = this.CPForm.value.idioma;
        servicio = this.CPForm.value.servicio;
        this._router.navigate(['/fetcha-TraductorCP']);
        }

    //Ir a la pagina de login
    login() {
        this._router.navigate(['/logreg']);
    }

    //Obtener cp-idioma-servicio introducidos
    get cp() { return this.CPForm.get('cp'); }
    get idioma() { return this.CPForm.get('idioma'); }
    get servicio() { return this.CPForm.get('servicio'); }

}

//Exportar variables
export var codpos;
export var idioma;
export var servicio;

//Lista datos Idiomas
interface IdiomaData {
    id: number;
    idioma: string;
}

//Lista datos Servicios
interface ServicioData {
    id: number;
    servicio: string;
}