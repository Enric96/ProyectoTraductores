import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchTraductorComponent } from '../fetchTraductor/fetchTraductor.component';
import { CPService } from '../../services/cpservice.service';
import { IdiomaService } from '../../services/idiservice.service';
import { ServicioService } from '../../services/serservice.service';

@Component({
    selector: 'app-cerrarsesion',
    templateUrl: './cerrarsesion.component.html',
    styleUrls: ['./cerrarsesion.component.css']
})
/** cerrarsesion component*/
export class CerrarsesionComponent {
    /** cerrarsesion ctor */
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _CPService: CPService, private _router: Router,
        private _IdiomaService: IdiomaService, private _ServicioService: ServicioService) {
    }

    sics() {
        window.location.reload();
        this._router.navigate(['/index']);
    }

    nocs() {
        this._router.navigate(['/fetcha-Traductor']);
    }
}