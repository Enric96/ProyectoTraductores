import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchServicioComponent } from '../fetchServicio/fetchServicio.component';
import { ServicioService } from '../../services/serservice.service';
@Component({
    selector: 'createServicio',
    templateUrl: './AddServicio.component.html',
    styleUrls: ['./addServicio.component.css']
})
export class createServicio {

    //Formulario servicios
    ServicioForm: FormGroup;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _ServicioService: ServicioService, private _router: Router) {
        this.ServicioForm = this._fb.group({
            //Verificar se ha introducido un servicio
            servicio: ['', [Validators.required]]
        })
    }

    //Añadir servicio
    save() {
        if (!this.ServicioForm.valid) {
            return;
        }
            this._ServicioService.saveServicio(this.ServicioForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-Idioma']);
                }, error => this.errorMessage = error)

    }

    //Boton atras
    cancel() {
        this._router.navigate(['/fetch-Idioma']);
    }

    //Obtener servicio introducido
    get servicio() { return this.ServicioForm.get('servicio'); }
}