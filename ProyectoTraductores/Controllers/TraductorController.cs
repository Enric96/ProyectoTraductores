using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using ProyectoTraductores.Models;
using ASPCoreWithAngular.Models;
/*
TRADUCTORES 
*/
namespace ProyectoTraductores.Controllers
{
    public class TraductorController : Controller
    {
        TraductorDataAccessLayer objTraductor = new TraductorDataAccessLayer();

        //Ver todos los traductores
        [HttpGet]
        [Route("api/Traductor/Index")]
        public IEnumerable<Traductor> Index()
        {
            var trad = objTraductor.GetAllTraductor();
            return trad;
        }

        //Ver un traductor (perfil)
        [HttpGet]
        [Route("api/Traductor/Details2/{usuario},{contrasena}")]
        public List<Traductor> Details2(string usuario, string contrasena)
        {
            return objTraductor.GetATraductor(usuario, contrasena);
        }

        //Buscar un traductor con cp-idioma-servicio
        [HttpGet]
        [Route("api/Traductor/Details3/{cp},{idioma},{servicio}")]
        public List<TraIdiSer> Details3(string cp, string idioma, string servicio)
        {
            return objTraductor.GetCPIdiSerTraductor(cp, idioma, servicio);
        }

        //Peticion de Traductor
        [HttpPost]
        [Route("api/Traductor/Peticion")]
        public int Peticion([FromBody] Peticion peticion)
        {
            return objTraductor.AddPeticion(peticion);
        }

        //Ver Peticiones
        [HttpGet]
        [Route("api/Traductor/VerPeticion/{idTraductor}")]
        public List<Peticion> VerPeticion(int idTraductor)
        {
            return objTraductor.GetAllPeticiones(idTraductor);
        }

        //Eliminar Peticion
        [HttpDelete]
        [Route("api/Traductor/ElimPeticion/{id}")]
        public int ElimPeticion(int id)
        {
            return objTraductor.DeletePeticion(id);
        }

        //Añadir traductor
        [HttpPost]
        [Route("api/Traductor/Create")]
        public int Create([FromBody] Traductor traductor)
        {
            return objTraductor.AddTraductor(traductor);
        }

        ////Añadir idioma a un traductor
        //[HttpGet]
        //[Route("api/Traductor/Createidioma/{ididioma},{idtraductor}")]
        //public int Createidioma(int ididioma, int idtraductor)
        //{
        //    return objTraductor.AddTraductorIdioma(ididioma, idtraductor);
        //}

        //Añadir servicio a un traductor
        //[HttpGet]
        //[Route("api/Traductor/Createservicio/{idservicios},{idtraductor}")]
        //public int Createservicio(int idservicios, int idtraductor)
        //{
        //    return objTraductor.AddTraductoServicio(idservicios, idtraductor);
        //}

        //[HttpPost]
        [Route("api/Traductor/Createidioma")]
        public int Createidioma([FromBody] Idiomatraductor idioma)
        {
            return objTraductor.AddTraductorIdioma(idioma.IDIdioma, idioma.IDTraductor);
        }

        //Añadir servicio a un traductor
        [HttpPost]
        [Route("api/Traductor/Createservicio")]
        public int Createservicio([FromBody] Serviciostraductor servicio)
        {
            return objTraductor.AddTraductoServicio(servicio.IDServicios, servicio.IDTraductor);
        }

        //Ver los idiomas de un traductor (usuario)
        [HttpGet]
        [Route("api/Traductor/GetIdiomas/{usuario},{contrasena}")]
        public List<TraIdiSer> GetIdiomas(string usuario, string contrasena)
        {
            return objTraductor.GetIdiomasHabladosUsuario(usuario, contrasena);
        }

        //Ver los idiomas de un traductor (id)
        [HttpGet]
        [Route("api/Traductor/GetIdiomasconID/{id}")]
        public List<TraIdiSer> GetIdiomasconID(int id)
        {
            return objTraductor.GetIdiomasHabladosID(id);
        }

        //Ver los servicios de un traductor (usuario)
        [HttpGet]
        [Route("api/Traductor/GetServicios/{usuario},{contrasena}")]
        public List<TraIdiSer> GetServicios(string usuario, string contrasena)
        {
            return objTraductor.GetServiciosDeTraductorconUsuario(usuario, contrasena);
        }

        //Ver los servicios de un traductor (id)
        [HttpGet]
        [Route("api/Traductor/GetServiciosconID/{id}")]
        public List<TraIdiSer> GetServiciosconID(int id)
        {
            return objTraductor.GetServiciosHabladosID(id);
        }

        //Ver los datos de un traductor a traves del id
        [HttpGet]
        [Route("api/Traductor/Details/{id}")]
        public Traductor Details(int id)
        {
            return objTraductor.GetTraductorData(id);
        }

        //Obtener el id de un traductor a traves del usuario
        [HttpGet]
        [Route("api/Traductor/Detailsverid/{usuario}")]
        public int Detailsverid(string usuario)
        {
            return objTraductor.GetTraductorID(usuario);
        }

        //Actualizar traductor (Editar traductor)
        [HttpPut]
        [Route("api/Traductor/Edit")]
        public int Edit([FromBody]Traductor traductor)
        {
            return objTraductor.UpdateTraductor(traductor);
        }

        //Borrar traductor
        [HttpDelete]
        [Route("api/Traductor/Delete/{id}")]
        public int Delete(int id)
        {
            return objTraductor.DeleteTraductor(id);
        }

        //Borrar traductor de la tabla TraductoresIdiomas 
        [HttpDelete]
        [Route("api/Traductor/DeleteIH/{id}")]
        public int DeleteIH(int id)
        {
            return objTraductor.DeleteTraductorTraductoresIdiomas(id);
        }

        //Borrar un idioma hablado por un traductor
        [HttpDelete]
        [Route("api/Traductor/DeleteTI/{idtraductor},{ididioma}")]
        public int DeleteTI(int idtraductor, int ididioma)
        {
            return objTraductor.DeleteIdiomaHablaTraductor(idtraductor, ididioma);
        }

        //Borrar un servicio dominado por un traductor
        [HttpDelete]
        [Route("api/Traductor/DeleteTS/{idtraductor},{idservicios}")]
        public int DeleteTS(int idtraductor, int idservicios)
        {
            return objTraductor.DeleteServicioDominaTraductor(idtraductor, idservicios);
        }

        //Borrar traductor de la tabla TraductoresServicios
        [HttpDelete]
        [Route("api/Traductor/DeleteSH/{id}")]
        public int DeleteSH(int id)
        {
            return objTraductor.DeleteTraductorTraductoresServicios(id);
        }

        //Borrar idioma de la tabla TraductoresIdioma
        [HttpDelete]
        [Route("api/Traductor/DeleteHI/{id}")]
        public int DeleteHI(int id)
        {
            return objTraductor.DeleteIdiomasTraductoresIdiomas(id);
        }

        //Borrar servicio de la tabla TraductoresServicios
        [HttpDelete]
        [Route("api/Traductor/DeleteHS/{id}")]
        public int DeleteHS(int id)
        {
            return objTraductor.DeleteServiciosTraductoresServicios(id);
        }
    }
}

public class Serviciostraductor
{
    public int IDServicios { get; set; }
    public int IDTraductor { get; set; }
}

public class Idiomatraductor
{
    public int IDIdioma { get; set; }
    public int IDTraductor { get; set; }
}