import { Component, Injectable } from '@angular/core';
import { usua, admin } from '../logreg/logreg.component';
import { Router } from '@angular/router';
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    adm: string = "adminno";
    usu: string = "usuno";
    constructor(private _router: Router) {

    }

    inices() {
        //Ver si esta logeadopara mostrar botones adicionales
        if (usua == undefined) {
            alert("No te has logeado");
            this._router.navigate(['/logreg']);
        }
        else {
            this.adm = admin;
            this.usu = usua;
        }
    }
}