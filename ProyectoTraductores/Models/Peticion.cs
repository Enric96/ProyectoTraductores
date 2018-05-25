using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoTraductores.Models
{
    public class Peticion
    {
        public int ID { get; set; }
        public int IDIdioma { get; set; }
        public string Idioma { get; set; }
        public int IDServicios { get; set; }
        public string Servicios { get; set; }
        public int IDTraductor { get; set; }
        public string NombreSolicitante { get; set; }
        public string Descripcion { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
    }
}
