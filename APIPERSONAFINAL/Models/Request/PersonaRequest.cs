using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPERSONAFINAL.Models.Request
{
    public class PersonaRequest
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int  Dni { get; set; }
    }
}
