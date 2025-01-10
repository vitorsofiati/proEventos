using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        public DataContext Context { get; }
        public EventosController(DataContext context) {
            this.Context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Get() {
            return Context.Eventos;
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id){
            var evento = Context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
            if (evento == null)
            {
                return NotFound($"Evento com ID {id} não encontrado.");
            }
            return Ok(evento);
        }
    }
}