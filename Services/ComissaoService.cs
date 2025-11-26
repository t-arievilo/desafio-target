using DesafioTarget.API.Models;

namespace DesafioTarget.API.Services;

    public class ComissaoService
{
    public List<VendedorComissao> CalcularComissoes(List<Venda> vendas)
    {
        var vendasPorVendedor = vendas.GroupBy(v => v.Vendedor);

        var resultado = new List<VendedorComissao>();

        foreach (var grupo in vendasPorVendedor)
        {
            var VendedorComissao = new VendedorComissao
            {
                Vendedor = grupo.Key,
                VendasComComissao = new List<VendaComissao>()
            };

            foreach (var venda in grupo)
            {
                var comissao = CalcularComissaoIndividual(venda.Valor);
                var percentual = ObterPercentualComissao(venda.Valor);

                VendedorComissao.VendasComComissao.Add(new VendaComissao
                {
                    ValorVenda = venda.Valor,
                    Comissao = comissao,
                    PercentualComissao = percentual
                });
            };

            resultado.Add(VendedorComissao);
        }

        return resultado;
    }

    private decimal CalcularComissaoIndividual(decimal valorVenda)
    {
        decimal percentual = ObterPercentualComissao(valorVenda);
        return valorVenda * percentual / 100;
    }

    private decimal ObterPercentualComissao(decimal valorVenda)
    {
        if (valorVenda < 100.00m)
        {
            return 0m;
        }

        else if (valorVenda < 500.00m)
        {
            return 1m;
        }
        else
        {
            return 5m;
        }
    }
}