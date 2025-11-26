using Microsoft.AspNetCore.Mvc;
using DesafioTarget.API.Models;
using DesafioTarget.API.Services;

namespace DesafioTarget.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstoqueController : ControllerBase
    {
        private readonly EstoqueService _estoqueService;

        public EstoqueController(EstoqueService estoqueService)
        {
            _estoqueService = estoqueService;
        }

        [HttpGet("produtos")]
        public IActionResult ObterProdutos()
        {
            var produtos = _estoqueService.ObterProdutos();
            return Ok(produtos);
        }

        [HttpPost("movimentar")]
        public IActionResult RegistrarMovimentacao([FromBody] MovimentacaoRequest request)
        {
            var movimentacao = _estoqueService.RegistrarMovimentacao(
                request.CodigoProduto,
                request.Descricao,
                request.Quantidade,
                request.TipoMovimentacao
            );

            if (movimentacao == null)
            {
                return BadRequest("Movimentação inválida. Verifique o código do produto e o estoque disponível.");
            }
            
            var produtoAtualizado = _estoqueService.ObterProdutos().First(p => p.CodigoProduto == request.CodigoProduto);
            var estoqueAtual = produtoAtualizado.Estoque;
            {
                return Ok(new { Movimentacao = movimentacao,
                                EstoqueAtual = estoqueAtual });
            }
        }

        public class MovimentacaoRequest
        {
            public int CodigoProduto { get; set; }
            public string Descricao { get; set; } = string.Empty;
            public int Quantidade { get; set; }
            public string TipoMovimentacao { get; set; } = string.Empty; 
        }
    }
}