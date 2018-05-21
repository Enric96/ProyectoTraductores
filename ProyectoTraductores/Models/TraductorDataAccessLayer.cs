using ProyectoTraductores.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
namespace ASPCoreWithAngular.Models
{
    public class TraductorDataAccessLayer
    {
        string connectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=ProyectoTraductores;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        /*
        TRADUCTORES 
        */
        //Ver todos los traductores
        public IEnumerable<Traductor> GetAllTraductor()
        {
            try
            {
                List<Traductor> lstTraductor = new List<Traductor>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllTraductores", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Traductor traductor = new Traductor();
                        traductor.ID = Convert.ToInt32(rdr["IDTraductor"]);
                        traductor.CorreoElectronico = rdr["CorreoElectronico"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Contrasena = rdr["Contrasena"].ToString();
                        traductor.Nombre = rdr["Nombre"].ToString();
                        traductor.Apellidos = rdr["Apellidos"].ToString();
                        traductor.Telefono = rdr["Telefono"].ToString();
                        traductor.CP = rdr["CP"].ToString();
                        traductor.Imagen = rdr["Imagen"].ToString();
                        lstTraductor.Add(traductor);
                    }
                    con.Close();
                }
                return lstTraductor;
            }
            catch
            {
                throw;
            }
        }

        //Añadir traductor (Registro)
        public int AddTraductor(Traductor traductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spAddTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CorreoElectronico", traductor.CorreoElectronico);
                    cmd.Parameters.AddWithValue("@Usuario", traductor.Usuario);
                    cmd.Parameters.AddWithValue("@Contrasena", traductor.Contrasena);
                    cmd.Parameters.AddWithValue("@Nombre", traductor.Nombre);
                    cmd.Parameters.AddWithValue("@Apellidos", traductor.Apellidos);
                    cmd.Parameters.AddWithValue("@Telefono", traductor.Telefono);
                    cmd.Parameters.AddWithValue("@CP", traductor.CP);
                    cmd.Parameters.AddWithValue("@Imagen", traductor.Imagen);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Actualizar traductor (Editar perfil)
        public int UpdateTraductor(Traductor traductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spUpdateTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", traductor.ID);
                    cmd.Parameters.AddWithValue("@CorreoElectronico", traductor.CorreoElectronico);
                    cmd.Parameters.AddWithValue("@Usuario", traductor.Usuario);
                    cmd.Parameters.AddWithValue("@Contrasena", traductor.Contrasena);
                    cmd.Parameters.AddWithValue("@Nombre", traductor.Nombre);
                    cmd.Parameters.AddWithValue("@Apellidos", traductor.Apellidos);
                    cmd.Parameters.AddWithValue("@Telefono", traductor.Telefono);
                    cmd.Parameters.AddWithValue("@CP", traductor.CP);
                    cmd.Parameters.AddWithValue("@Imagen", traductor.Imagen);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Datos de un traductor
        public Traductor GetTraductorData(int id)
        {
            try
            {
                Traductor traductor = new Traductor();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM Traductores WHERE IDTraductor= " + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        traductor.ID = Convert.ToInt32(rdr["IDTraductor"]);
                        traductor.CorreoElectronico = rdr["CorreoElectronico"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Contrasena = rdr["Contrasena"].ToString();
                        traductor.Nombre = rdr["Nombre"].ToString();
                        traductor.Apellidos = rdr["Apellidos"].ToString();
                        traductor.Telefono = rdr["Telefono"].ToString();
                        traductor.CP = rdr["CP"].ToString();
                    }
                    con.Close();
                }
                return traductor;
            }
            catch
            {
                throw;
            }
        }

        //Eliminar traductor
        public int DeleteTraductor(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Coger el ID del traductor con el usuario
        public int GetTraductorID(string usuario)
        {
            try
            {
                int ID = 0;
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetTraductorID", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Usuario", usuario);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        ID = Convert.ToInt32(rdr["IDTraductor"]);
                    }
                    con.Close();
                }
                return ID;
            }
            catch
            {
                throw;
            }
        }

        //Datos de un solo traductor (perfil)
        public List<Traductor> GetATraductor(string parusuario, string parcontrasena)
        {
            try
            {
                List<Traductor> lstTraductor = new List<Traductor>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Usuario", parusuario);
                    cmd.Parameters.AddWithValue("@Contrasena", parcontrasena);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Traductor traductor = new Traductor();
                        traductor.ID = Convert.ToInt32(rdr["IDTraductor"]);
                        traductor.CorreoElectronico = rdr["CorreoElectronico"].ToString();
                        traductor.Usuario = rdr["Usuario"].ToString();
                        traductor.Contrasena = rdr["Contrasena"].ToString();
                        traductor.Nombre = rdr["Nombre"].ToString();
                        traductor.Apellidos = rdr["Apellidos"].ToString();
                        traductor.Telefono = rdr["Telefono"].ToString();
                        traductor.CP = rdr["CP"].ToString();
                        traductor.Imagen = rdr["Imagen"].ToString();
                        lstTraductor.Add(traductor);
                    }
                    con.Close();
                }
                return lstTraductor;
            }
            catch
            {
                throw;
            }
        }

        //Añadir Idioma al traductor
        public int AddTraductorIdioma(int parIDIdioma, int parIDTraductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spAddTraductoresIdiomas", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDIdioma", parIDIdioma);
                    cmd.Parameters.AddWithValue("@IDTraductor", parIDTraductor);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Añadir servicio al traductor
        public int AddTraductoServicio(int parIDServicios, int parIDTraductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spAddTraductoresServicios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDServicios", parIDServicios);
                    cmd.Parameters.AddWithValue("@IDTraductor", parIDTraductor);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Buscar traductor con CP-Idioma-Servicio
        public List<TraIdiSer> GetCPIdiSerTraductor(string parcp, string paridi, string parser)
        {
            try
            {
                List<TraIdiSer> lstTraductor = new List<TraIdiSer>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetCpIdiSer", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CP", parcp);
                    cmd.Parameters.AddWithValue("@Idioma", paridi);
                    cmd.Parameters.AddWithValue("@Servicios", parser);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        TraIdiSer traidiser = new TraIdiSer();
                        traidiser.Nombre = rdr["Nombre"].ToString();
                        traidiser.Apellidos = rdr["Apellidos"].ToString();
                        traidiser.CorreoElectronico = rdr["CorreoElectronico"].ToString();
                        traidiser.Telefono = rdr["Telefono"].ToString();
                        traidiser.CP = rdr["CP"].ToString();
                        traidiser.Idioma = rdr["Idioma"].ToString();
                        traidiser.Servicios = rdr["Servicios"].ToString();
                        lstTraductor.Add(traidiser);
                    }
                    con.Close();
                }
                return lstTraductor;
            }
            catch
            {
                throw;
            }
        }

        /*
        IDIOMAS
        */
        //Añadir idioma
        public string AddIdioma(Idiomas idiomas)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spAddIdioma", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Idioma", idiomas.Idioma);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return '"' + idiomas.Idioma + '"';
            }
            catch
            {
                throw;
            }
        }

        //Ver todos los idiomas
        public IEnumerable<Idiomas> GetAllIdiomas()
        {
            try
            {
                List<Idiomas> lstIdiomas = new List<Idiomas>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllIdiomas", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Idiomas idiomas = new Idiomas();
                        idiomas.ID = Convert.ToInt32(rdr["IDIdioma"]);
                        idiomas.Idioma = rdr["Idioma"].ToString();
                        lstIdiomas.Add(idiomas);
                    }
                    con.Close();
                }
                return lstIdiomas;
            }
            catch
            {
                throw;
            }
        }

        //Borrar idioma
        public string DeleteIdioma(string idioma)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteIdioma", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Idioma", idioma);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return '"' + idioma + '"';
            }
            catch
            {
                throw;
            }
        }

        //Borrar el idioma que habla un traductor
        public int DeleteIdiomaHablaTraductor(int idtraductor, int ididioma)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteIdiomaHablaTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", idtraductor);
                    cmd.Parameters.AddWithValue("@IDIdioma", ididioma);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Borrar Traductor de la tabla TraductoresIdiomas
        public int DeleteTraductorTraductoresIdiomas(int idtraductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteTraductorTraductoresIdiomas", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", idtraductor);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Borrar Idioma de la tabla TraductoresIdiomas
        public int DeleteIdiomasTraductoresIdiomas(int ididioma)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteIdiomasTraductoresIdiomas", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDIdioma", ididioma);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Ver los Idiomas que habla un traductor (usuario)
        public List<TraIdiSer> GetIdiomasHabladosUsuario(string usuario, string contrasena)
        {
            try
            {
                List<TraIdiSer> lsttraIdiSers = new List<TraIdiSer>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetIdiomasHabladosUsuario", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Usuario", usuario);
                    cmd.Parameters.AddWithValue("@Contrasena", contrasena);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        TraIdiSer traIdiSer = new TraIdiSer();
                        traIdiSer.IDIdioma = Convert.ToInt32(rdr["IDIdioma"]);
                        traIdiSer.Idioma = rdr["Idioma"].ToString();
                        lsttraIdiSers.Add(traIdiSer);
                    }
                    con.Close();
                }
                return lsttraIdiSers;
            }
            catch
            {
                throw;
            }
        }

        //Ver los idiomas que habla un traductor (id)
        public List<TraIdiSer> GetIdiomasHabladosID(int id)
        {
            try
            {
                List<TraIdiSer> lsttraIdiSer = new List<TraIdiSer>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetIdiomasHabladosID", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", id);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        TraIdiSer traIdiSer = new TraIdiSer();
                        traIdiSer.IDIdioma = Convert.ToInt32(rdr["IDIdioma"]);
                        traIdiSer.Idioma = rdr["Idioma"].ToString();
                        lsttraIdiSer.Add(traIdiSer);
                    }
                    con.Close();
                }
                return lsttraIdiSer;
            }
            catch
            {
                throw;
            }
        }

        /*
        SERVICIOS 
        */
        //Ver los servicios que domina un traductor (usuario)
        public List<TraIdiSer> GetServiciosDeTraductorconUsuario(string usuario, string contrasena)
        {
            try
            {
                List<TraIdiSer> lsttraIdiSer = new List<TraIdiSer>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetServiciosDeTraductorconUsuario", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Usuario", usuario);
                    cmd.Parameters.AddWithValue("@Contrasena", contrasena);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        TraIdiSer traIdiSer = new TraIdiSer();
                        traIdiSer.IDServicio = Convert.ToInt32(rdr["IDServicios"]);
                        traIdiSer.Servicios = rdr["Servicios"].ToString();
                        lsttraIdiSer.Add(traIdiSer);
                    }
                    con.Close();
                }
                return lsttraIdiSer;
            }
            catch
            {
                throw;
            }
        }

        //Ver los servicios que domina un traductor (id)
        public List<TraIdiSer> GetServiciosHabladosID(int id)
        {
            try
            {
                List<TraIdiSer> lsttraIdiSer = new List<TraIdiSer>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetServiciosDeTraductorconID", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", id);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        TraIdiSer traIdiSer = new TraIdiSer();
                        traIdiSer.IDServicio = Convert.ToInt32(rdr["IDServicios"]);
                        traIdiSer.Servicios = rdr["Servicios"].ToString();
                        lsttraIdiSer.Add(traIdiSer);
                    }
                    con.Close();
                }
                return lsttraIdiSer;
            }
            catch
            {
                throw;
            }
        }

        //Añadir servicio
        public string AddServicio(Servicios servicios)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spAddServicio", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Servicios", servicios.Servicio);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return '"' + servicios.Servicio + '"';
            }
            catch
            {
                throw;
            }
        }

        //Borrar servicio
        public string DeleteServicio(string servicios)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteServicios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Servicios", servicios);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return '"' + servicios + '"';
            }
            catch
            {
                throw;
            }
        }

        //Borrar traductor de la tabla TraductoresServicios 
        public int DeleteTraductorTraductoresServicios(int idtraductor)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteTraductorTraductoresServicios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", idtraductor);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Borrar el servicio que domina un traductor
        public int DeleteServicioDominaTraductor(int idtraductor, int idservicio)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteServicioDominaTraductor", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDTraductor", idtraductor);
                    cmd.Parameters.AddWithValue("@IDServicios", idservicio);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }


        //Borrar Servicios de la tabla TraductoresServicios
        public int DeleteServiciosTraductoresServicios(int idservicios)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteServiciosTraductoresServicios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@IDServicios", idservicios);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Ver todos los servicios
        public IEnumerable<Servicios> GetAllServicios()
        {
            try
            {
                List<Servicios> lstServicios = new List<Servicios>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllServicios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Servicios servicios = new Servicios();
                        servicios.ID = Convert.ToInt32(rdr["IDServicios"]);
                        servicios.Servicio = rdr["Servicios"].ToString();
                        lstServicios.Add(servicios);
                    }
                    con.Close();
                }
                return lstServicios;
            }
            catch
            {
                throw;
            }
        }


    }
}
