using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ProEventos.API.Controllers
{
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public EventoController() {

        }

        [HttpGet]
        public string Get() {
            return "value";
        }
    }
}