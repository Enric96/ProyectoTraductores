import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traservice.service';
import { Peticion } from '../../Models/Peticion';
@Component({
    selector: 'addPeticion',
    templateUrl: './addPeticion.component.html',
    styleUrls: ['./addPeticion.component.css']
})
/** addPeticion component*/
export class AddPeticionComponent {
    PeticionForm: FormGroup;
    idTraductor: number;
    idIdioma: number;
    idServicios: number;
    longdesc: number;
    public peticionData: Peticion;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _TraductorService: TraductorService, private _router: Router) {
        if (this._avRoute.snapshot.params["idTraductor"]) {
            this.idTraductor = this._avRoute.snapshot.params["idTraductor"];
        }
        if (this._avRoute.snapshot.params["idIdioma"]) {
            this.idIdioma = this._avRoute.snapshot.params["idIdioma"];
        }
        if (this._avRoute.snapshot.params["idServicios"]) {
            this.idServicios = this._avRoute.snapshot.params["idServicios"];
        }

        this.PeticionForm = this._fb.group({
            id: 0,
            nombre: ['', [Validators.required]],
            descripcion: ['', [Validators.required, Validators.maxLength(1000)]],
            email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9-_.']{1,}@([a-zA-Z-_\.])?[a-zA-Z0-9-_]{1,}\.[a-zA-Z]{1,4}")]],
            telefono: ['', [Validators.required, Validators.pattern("([0-9])+"), Validators.maxLength(9), Validators.minLength(9)]]
        })

        this.peticionData = new Peticion(0, 0, 0, "", "", "", "");

        
    }

    save() {
        if (!this.PeticionForm.valid) {
            return;
        }
        else {
            this.peticionData.idIdioma = this.idIdioma;
            this.peticionData.idServicios = this.idServicios;
            this.peticionData.idTraductor = this.idTraductor;
            this.peticionData.nombreSolicitante = this.PeticionForm.value.nombre;
            this.peticionData.descripcion = this.PeticionForm.value.descripcion;
            this.peticionData.email = this.PeticionForm.value.email;
            this.peticionData.telefono = this.PeticionForm.value.telefono;
            this._TraductorService.savePeticion(this.peticionData)
                .subscribe((data) => {
                    this._router.navigate(['/index']);
                }, error => this.errorMessage = error)
            alert("Se le ha enviado la solicitud de contratacion al traductor, espere su respuesta.")
        }
    }

    cancel() {
        this._router.navigate(['fetcha-TraductorCP']);
    }

    longitudesc() {
        this.longdesc = (this.PeticionForm.value.descripcion.length);
    }

    get nombre() { return this.PeticionForm.get('nombre'); }
    get descripcion() { return this.PeticionForm.get('descripcion'); }
    get email() { return this.PeticionForm.get('email'); }
    get telefono() { return this.PeticionForm.get('telefono'); }
}