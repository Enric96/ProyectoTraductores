import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traservice.service'
@Component({
    selector: 'fetchTraductor',
    templateUrl: './fetchTraductor.component.html',
    styleUrls: ['./fetchTraductor.component.css']
})
export class FetchTraductorComponent {

    //Lista
    public traList: TraductorData[];
    constructor(public http: Http, private _router: Router, private _TraductorService: TraductorService) {
        this.getTraductor();
    }

    //Ver todos los traductores
    getTraductor() {
        this._TraductorService.getTraductor().subscribe(
            data => this.traList = data
        )
    }

    //Borrar traductor, de la tabla traductor y de las tablas TraductoresIdioma y TraductoresServicios
    delete(IDTraductor, Usuario) {
        var ans = confirm("¿Estás seguro que quieres eliminar al usuario: " + Usuario + "?");
        if (ans) {
            this._TraductorService.deleteTraductor(IDTraductor).subscribe((data) => {
                this.getTraductor();
            }, error => console.error(error))
            this._TraductorService.DeleteTraductorTraductoresIdiomas(IDTraductor)
                .subscribe((data) => {
                    this.getTraductor();
                });
            this._TraductorService.DeleteTraductorTraductoresServicios(IDTraductor)
                .subscribe((data) => {
                    this.getTraductor();
                });
        }
    }
}

//Lista datos traductores
interface TraductorData {
    id: number;  
    correoElectronico: string;
    usuario: string;
    contrasena: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    cp: string;
    imagen: string;
}