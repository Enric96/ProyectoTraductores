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
    selector: 'addidiomaadicional',
    templateUrl: './addidiomaadicional.component.html',
    styleUrls: ['./addidiomaadicional.component.css']
})
export class AddIdiomaAdicional {

    //Lista
    public idioList: IdiomaconData[];
    public idiList: IdiomaData[];
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _TraductorService: TraductorService,
        private _IdiomaService: IdiomaService, private _router: Router) {
        this.getIdioma();
    }


    //Ver todos los idiomas
    getIdioma() {
        this._IdiomaService.getIdioma().subscribe(
            data => {
                this.idiList = data;
                this.getaIdioma();
            }
        )
        
    }

    getaIdioma() {
        this._TraductorService.getIdiomasHabladosconID(id).subscribe(
            data => {
                this.idioList = data;
                this.deshabilitarchkbx();
            }
        )
    }

    //Deshabvilitar idiomas ya conocidos
    deshabilitarchkbx() {
        var idioma = <any>document.getElementsByClassName("chkbxi");
        for (var ic = 0; ic < this.idioList.length; ic++) {
            for (var i = 0; i < idioma.length; i++) {
                var idi = idioma[i];
                if (idi.value == this.idioList[ic].idIdioma) {
                    idi.disabled = true;
                }
            }
        }
    }

    //Añadir idiomas nuevos
    enviar() {
        var idioma = <any>document.getElementsByClassName("chkbxi");
        for (var i = 0; i < idioma.length; i++) {
            var idi = idioma[i];
            if (idi.checked) {
                this._TraductorService.saveTraductorIdioma(idi.value, id).subscribe((data) => {
                    this._router.navigate(['/fetcha-Traductor']);
                })
            }
        }
    }

    //Boton atras
    cancelar() {
        this._router.navigate(['/fetcha-Traductor']);
    }
}

//Lista datos Idiomas
interface IdiomaData {
    id: number;
    idioma: string;
}

interface IdiomaconData {
    idIdioma: number;
    idioma: string;
}