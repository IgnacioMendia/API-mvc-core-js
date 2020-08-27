using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIPERSONAFINAL.Models;
using APIPERSONAFINAL.Models.Request;
using APIPERSONAFINAL.Models.Response;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIPERSONAFINAL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
       [HttpGet]
        public IActionResult GetPersona()
        {
            Respuesta oRespuesta = new Respuesta();
            oRespuesta.Exito = 0;
            try
            {
                using (ApiPersonaContext db = new ApiPersonaContext())
                {
                    var lst = db.Persona.ToList();
                    oRespuesta.Exito = 1;
                    oRespuesta.Data = lst;
                }
            }
            catch(Exception ex)
            {
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }

        
        [HttpPost]
        public IActionResult postPersona(PersonaRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            oRespuesta.Exito = 0;
            
             try
             {
                using (ApiPersonaContext db = new ApiPersonaContext())
                {
                    Persona oPersona = new Persona();
                    oPersona.Nombre = oModel.Nombre;
                    oPersona.Apellido = oModel.Apellido;
                    oPersona.Dni = oModel.Dni;
                    db.Persona.Add(oPersona);
                    db.SaveChanges();

                    oRespuesta.Exito = 1;
                }
             }
             catch (Exception ex)
             {
                 oRespuesta.Mensaje = ex.Message;
             }

            return Ok(oRespuesta);
            
        }

        [HttpPut]
        public IActionResult putPersona(PersonaRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            oRespuesta.Exito = 0;
            try
            {
                using (ApiPersonaContext db = new ApiPersonaContext())
                {
                    Persona oPersona = db.Persona.Find(oModel.Id);
                    oPersona.Nombre = oModel.Nombre;
                    oPersona.Apellido = oModel.Apellido;
                    oPersona.Dni = oModel.Dni;
                    db.Entry(oPersona).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();

                    oRespuesta.Exito = 1;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }

        [HttpDelete]
        public IActionResult deletePersona(PersonaRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            oRespuesta.Exito = 0;
            try
            {
                using (ApiPersonaContext db = new ApiPersonaContext())
                {
                    Persona oPersona = db.Persona.Find(oModel.Id);
                    db.Persona.Remove(oPersona);
                    db.SaveChanges();

                    oRespuesta.Exito = 1;
                }
            }
            catch (Exception ex)
            {
                oRespuesta.Mensaje = ex.Message;
            }
            return Ok(oRespuesta);
        }
    }
}
