import { NgModule } from '@angular/core';
/*
SERVICES
*/
import { TraductorService } from './services/traservice.service';
import { IdiomaService } from './services/idiservice.service';
import { CPService } from './services/cpservice.service';
import { ServicioService } from './services/serservice.service';
import { LogregService } from './services/logregservice.service';
/*
MODULES
*/
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
/*
COMPONENTS
*/
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
//import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { FetchTraductorComponent } from './components/fetchTraductor/fetchTraductor.component';
import { createTraductor } from './components/addTraductor/addTraductor.component';
import { logregComponent } from './components/logreg/logreg.component';
import { FetchaTraductorComponent } from './components/fetchaTraductor/fetchaTraductor.component';
import { FetchaTraductorCPComponent } from './components/fetchaTraductorCP/fetchaTraductorCP.component';
import { FetchIdiomaComponent } from './components/fetchIdioma/fetchIdioma.component';
import { AddTraIdiSerComponent } from './components/addTraIdiSer/addTraIdiSer.component';
import { createIdioma } from './components/addIdioma/addIdioma.component';
import { FetchServicioComponent } from './components/fetchServicio/fetchServicio.component';
import { createServicio } from './components/addServicio/addServicio.component';
import { CerrarsesionComponent } from './components/cerrarsesion/cerrarsesion.component';
import { AddIdiomaAdicional } from './components/addidiomaadicional/addidiomaadicional.component';
import { AddServicioAdicional } from './components/addservicioadicional/addservicioadicional.component';
import { ErrorComponent } from './components/error/error.component';
import { AddPeticionComponent } from './components/addPeticion/addPeticion.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        //HomeComponent,
        IndexComponent,
        FetchTraductorComponent,
        createTraductor,
        logregComponent,
        FetchaTraductorComponent,
        FetchaTraductorCPComponent,
        FetchIdiomaComponent,
        AddTraIdiSerComponent,
        createIdioma,
        FetchServicioComponent,
        createServicio,
        CerrarsesionComponent,
        AddIdiomaAdicional,
        AddServicioAdicional,
        ErrorComponent,
        AddPeticionComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            /*
            RUTAS
            */
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            { path: 'index', component: IndexComponent },
            //{ path: 'error', component: ErrorComponent},
            { path: 'logreg', component: logregComponent },
            { path: 'fetch-Traductor', component: FetchTraductorComponent },
            { path: 'fetch-Servicio', component: FetchServicioComponent },
            { path: 'fetch-Idioma', component: FetchIdiomaComponent },
            { path: 'fetcha-Traductor', component: FetchaTraductorComponent },
            { path: 'fetcha-TraductorCP', component: FetchaTraductorCPComponent },
            { path: 'TraIdiSer', component: AddTraIdiSerComponent },
            { path: 'register-Traductor', component: createTraductor },
            { path: 'register-Idioma', component: createIdioma },
            { path: 'register-Servicio', component: createServicio },
            { path: 'Traductor/edit/:id', component: createTraductor },
            { path: 'cerrarsesion', component: CerrarsesionComponent },
            { path: 'add-Idioma-Adicional', component: AddIdiomaAdicional },
            { path: 'add-Servicio-Adicional', component: AddServicioAdicional },
            { path: 'PeticionTraductor/:idTraductor/:idIdioma/:idServicios', component: AddPeticionComponent },
            { path: '**', component: ErrorComponent }
        ])
    ],
    providers: [TraductorService, CPService, IdiomaService, ServicioService, LogregService]
})
export class AppModuleShared {
}