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
IDIOMA
*/
namespace ProyectoTraductores.Controllers
{ 
    public class IdiomaController : Controller
    {
        TraductorDataAccessLayer objIdioma = new TraductorDataAccessLayer();

        //Ver todos los idiomas
        [HttpGet]
        [Route("api/Idioma/Index")]
        public IEnumerable<Idiomas> Index()
        {
            var idio = objIdioma.GetAllIdiomas();
            return idio;
        }

        //Añadir idioma
        [HttpPost]
        [Route("api/Idioma/Create")]
        public string Create([FromBody] Idiomas idiomas)
        {
            return objIdioma.AddIdioma(idiomas);
        }

        //Borrar idioma
        [HttpDelete]
        [Route("api/Idioma/Delete/{idioma}")]
        public string Delete(string idioma)
        {
            return objIdioma.DeleteIdioma(idioma);
        }
    }
}