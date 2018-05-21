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
SERVICIOS
*/
namespace ProyectoTraductores.Controllers
{ 
    public class ServicioController : Controller
    {
        TraductorDataAccessLayer objServicio = new TraductorDataAccessLayer();

        //Ver todos los servicios
        [HttpGet]
        [Route("api/Servicio/Index")]
        public IEnumerable<Servicios> Index()
        {
            var serv = objServicio.GetAllServicios();
            return serv;
        }

        //Añadir servicio
        [HttpPost]
        [Route("api/Servicio/Create")]
        public string Create([FromBody] Servicios servicios)
        {
            return objServicio.AddServicio(servicios);
        }

        //Borrar servicio
        [HttpDelete]
        [Route("api/Servicio/Delete/{servicios}")]
        public string Delete(string servicios)
        {
            return objServicio.DeleteServicio(servicios);
        }
    }
}