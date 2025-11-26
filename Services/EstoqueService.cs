using DesafioTarget.API.Models;

namespace DesafioTarget.API.Services;

public class EstoqueService
{
    private List<Produto> _produtos;
    private List<Movimentacao> _movimentacoes;
    private int _proximoIdMovimentacao = 1;

public EstoqueService()
    {
        _produtos = new List<Produto>
        {
            new Produto { CodigoProduto = 101, DescricaoProduto = "Caneta Azul", Estoque = 150 },
            new Produto { CodigoProduto = 102, DescricaoProduto = "Caderno Universitário", Estoque = 75 },
            new Produto { CodigoProduto = 103, DescricaoProduto = "Borracha Branca", Estoque = 200 },
            new Produto { CodigoProduto = 104, DescricaoProduto = "Lápis Preto HB", Estoque = 320 },
            new Produto { CodigoProduto = 105, DescricaoProduto = "Marcador de Texto Amarelo", Estoque = 90 }
        };

        _movimentacoes = new List<Movimentacao>();
    }

    public List<Produto> ObterProdutos()
    {
        return _produtos;
    }

    public Movimentacao? RegistrarMovimentacao(int codigoProduto, string descricao, int quantidade, string tipoMovimentacao)
    {
        var produto = _produtos.FirstOrDefault(p => p.CodigoProduto == codigoProduto);
        if (produto == null)
        {
            return null; 
        }

        if (tipoMovimentacao == "SAIDA" && produto.Estoque < quantidade)
        return null;

        if (tipoMovimentacao == "ENTRADA")
         produto.Estoque += quantidade;
         else if (tipoMovimentacao == "SAIDA")
         produto.Estoque -= quantidade;

         var movimentacao = new Movimentacao
         {
            Id = _proximoIdMovimentacao++,
            CodigoProduto = codigoProduto,
            Descricao = descricao,
            Quantidade = quantidade,
            DataMovimentacao = DateTime.Now,
            TipoMovimentacao = tipoMovimentacao
         };

         _movimentacoes.Add(movimentacao);
            return movimentacao;
    }
}
