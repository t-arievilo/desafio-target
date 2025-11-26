using Microsoft.AspNetCore.Mvc;
using DesafioTarget.API.Models;
using DesafioTarget.API.Services;

namespace DesafioTarget.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ComissoesController : ControllerBase
    {
        private readonly ComissaoService _comissaoService;

        public ComissoesController(ComissaoService comissaoService)
        {
            _comissaoService = comissaoService;
        }

        [HttpPost("calcular")]
        public IActionResult CalcularComissoes([FromBody] VendasData vendasData)
        {
            try
            {
                var resultado = _comissaoService.CalcularComissoes(vendasData.Vendas);
                return Ok(resultado);
            }

        catch (Exception ex)
            {
                return BadRequest($"Erro ao calcular comissões: {ex.Message}");
            }
        }
    }
}