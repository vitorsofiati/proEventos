using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.API.Models
{
    public class Evento
    {
        public int EventoId { get; set; }
        
        public required string Local { get; set; }

        public required string DataEvento { get; set; }

        public required string Tema { get; set; }

        public int Qtd { get; set; }

        public required string Lote { get; set; }

        public string? ImagemUrl { get; set; }
    }
}