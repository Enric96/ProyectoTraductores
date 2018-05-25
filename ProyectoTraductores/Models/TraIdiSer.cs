using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoTraductores.Models
{
    //COMBINACION TABLA IDIOMAS-SERVICIOS-TRADUCTORES
    public class TraIdiSer
    {
        public int IDIdioma { get; set; }
        public int IDServicio { get; set; }
        public int IDTraductor { get; set; }
        public string Imagen { get; set; }
        public string Usuario { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string CorreoElectronico { get; set; }
        public string Telefono { get; set; }
        public string CP { get; set; }
        public string Idioma { get; set; }
        public string Servicios { get; set; }
    }
}
