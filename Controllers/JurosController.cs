using Microsoft.AspNetCore.Mvc;
using DesafioTarget.API.Services;
using DesafioTarget.API.Models;

namespace DesafioTarget.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JurosController : ControllerBase
    {
        private readonly JurosService _jurosService;

        public JurosController(JurosService jurosService)
        {
            _jurosService = jurosService;
        }

        [HttpPost("calcular")]
        public IActionResult CalcularJuros([FromBody] CalculoJurosRequest request)
        {
            if (request.ValorOriginal <=0)
            return BadRequest("O valor original deve ser maior que zero.");

            var resultado = _jurosService.CalcularJuros(request.ValorOriginal, request.DataVencimento);
            return Ok(resultado);
        }
    }

    public class CalculoJurosRequest
    {
        public decimal ValorOriginal { get; set; }
        public DateTime DataVencimento { get; set; }
    }
}