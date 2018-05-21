import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchIdiomaComponent } from '../fetchIdioma/fetchIdioma.component';
import { IdiomaService } from '../../services/idiservice.service';
@Component({
    selector: 'createIdioma',
    templateUrl: './AddIdioma.component.html',
    styleUrls: ['./addIdioma.component.css']
})
export class createIdioma {

    //Formulario
    IdiomaForm: FormGroup;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _IdiomaService: IdiomaService, private _router: Router) {
        this.IdiomaForm = this._fb.group({

            //Verificar si idioma se ha introducido
            idioma: ['', [Validators.required]]
        })
    }

    //Añadir idioma
    save() {
        if (!this.IdiomaForm.valid) {
            return;
        }
            this._IdiomaService.saveIdioma(this.IdiomaForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-Idioma']);
                }, error => this.errorMessage = error)
        
    }

    //Boton atras
    cancel() {
        this._router.navigate(['/fetch-Idioma']);
    }

    //Obtener idioma introducido    //Obtener idioma introducido
    get idioma() { return this.IdiomaForm.get('idioma'); }
}