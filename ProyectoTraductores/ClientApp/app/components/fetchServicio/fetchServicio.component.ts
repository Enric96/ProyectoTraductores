import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../services/serservice.service';
import { TraductorService } from '../../services/traservice.service';
@Component({
    selector: 'fetchServicio',
    templateUrl: './fetchServicio.component.html',
    styleUrls: ['./fetchServicio.component.css']
})
export class FetchServicioComponent {

    //Lista
    public serList: ServicioData[];
    constructor(public http: Http, private _router: Router, private _ServicioService: ServicioService,
        private _TraductorService: TraductorService) {
        this.getServicio();
    }

    //Ver todos los servicios
    getServicio() {
        this._ServicioService.getServicios().subscribe(
            data => this.serList = data
        )
    }

    //Borrar servicio de las tablas servicios y TraductoresServicios
    delete(Servicio) {
        var ans = confirm("¿Estás seguro de que quieres eliminar el servicio: " + Servicio + "?");
        if (ans) {
            this._TraductorService.DeleteServiciosTraductoresServicios(Servicio).subscribe((data) => {
                this.getServicio();
            }, error => console.error(error))

            this._ServicioService.deleteServicio(Servicio).subscribe((data) => {
                this.getServicio();
            }, error => console.error(error))
        }
    }
}

//Lista datos servicios
interface ServicioData {  
    servicio: string;  
}