using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = [
                new Evento () {
                EventoId = 1,
                Tema = "Angular e .NET",
                Local = "Praia Grande",
                Lote = "1° Lote",
                Qtd = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yy"),
                ImagemUrl = "foto.png"
                },
                new Evento () {
                EventoId = 2,
                Tema = "Apenas Angular aqui",
                Local = "São Vicente",
                Lote = "2° Lote",
                Qtd = 100,
                DataEvento = DateTime.Now.AddDays(9).ToString("dd/MM/yy"),
                ImagemUrl = "foto.png"
                }
            ] ;
        public EventoController() {

        }

        [HttpGet]
        public IEnumerable<Evento> Get() {
            return _evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id) {
            return _evento.Where(evento => evento.EventoId == id);
        }
    }
}