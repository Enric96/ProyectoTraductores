import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchTraductorComponent } from '../fetchTraductor/fetchTraductor.component';
import { LogregService } from '../../services/logregservice.service';
import { NavMenuComponent } from '../navmenu/navmenu.component';
import { LowerCasePipe } from '@angular/common/src/pipes';

@Component({
    selector: 'logreg',
    templateUrl: './logreg.component.html',
    styleUrls: ['./logreg.component.css']
})
export class logregComponent {
    //user: string;
    //pass: string;
    LogregForm: FormGroup;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _LogregService: LogregService, private _router: Router) {

        //Ver si los datos introducidos en el formulario son correctos
        this.LogregForm = this._fb.group({
            usuario: ['', [Validators.required]],
            contrasena: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z]).{2,40}$')]]
        })

        //crear variables
        var userlogin = "";
        var passlogin = "";
        var admin = "adminno";
        var usua = "usuno";
    }

    //@ViewChild("navmenu") navmenu: NavMenuComponent;

    enviar() {

        //Boton 'Entrar' pulsado
        if (!this.LogregForm.valid) {
            return;
        }

        //Si login es Admin
        
        if (this.LogregForm.value.usuario.toLowerCase() == "administrador" && this.LogregForm.value.contrasena.toLowerCase() == "adminadmin123") {
            admin = "adminsi";
            usua = "ususi";
            this._router.navigate(['/fetcha-Traductor']);
            userlogin = this.LogregForm.value.usuario;
            passlogin = this.LogregForm.value.contrasena;
            //this.navmenu.inices();
            //NavMenuComponent.inices();
            //alert(admin + "  " + usua);
        }

        //Si login es otro
        else {
            usua = "ususi";
            admin = "adminno";
            this._router.navigate(['/fetcha-Traductor']);
            userlogin = this.LogregForm.value.usuario;
            passlogin = this.LogregForm.value.contrasena; 
            //this.navmenu.inices();
            //NavMenuComponent.inices();
            //alert(admin + "  " + usua);
        }
    }

    //Boton 'Registrar' pulsado --> va al formulario de registro
    logreg() {
        this._router.navigate(['/register-Traductor']);
    }

    //Obtener el usuario y la contraseña introducidos
    get usuario() { return this.LogregForm.get('usuario'); }
    get contrasena() { return this.LogregForm.get('contrasena'); }
}

//Exportar variables
export var userlogin;
export var passlogin;
export var admin;
export var usua;