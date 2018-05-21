import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IdiomaService } from '../../services/idiservice.service';
import { TraductorService } from '../../services/traservice.service';
@Component({
    selector: 'fetchIdioma',
    templateUrl: './fetchIdioma.component.html',
    styleUrls: ['./fetchIdioma.component.css']
})
export class FetchIdiomaComponent {

    //Lista
    public idiList: IdiomaData[];
    constructor(public http: Http, private _router: Router, private _IdiomaService: IdiomaService,
        private _TraductorService: TraductorService) {
        this.getIdioma();
    }

    //Ver todos los idiomas
    getIdioma() {
        this._IdiomaService.getIdioma().subscribe(
            data => this.idiList = data
        )
    }

    //Borrar idioma de las tablas idioma y TraductoresIdiomas
    delete(Idioma) {
        var ans = confirm("¿Estás seguro que quieres eliminar el idioma: " + Idioma +"?");
        if (ans) {

            this._TraductorService.DeleteIdiomasTraductoresIdiomas(Idioma).subscribe((data) => {
                this.getIdioma();
            }, error => console.error(error))

            this._IdiomaService.deleteIdioma(Idioma).subscribe((data) => {
                this.getIdioma();
            }, error => console.error(error))
        }
    }
}

//Lista datos idioma
interface IdiomaData {
    idioma: string;  
}