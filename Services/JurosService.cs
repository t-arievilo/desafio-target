using DesafioTarget.API.Models;

namespace DesafioTarget.API.Services;

public class JurosService
{
    public CalculoJuros CalcularJuros(decimal valorOriginal, DateTime dataVencimento)
    {
        var dataAtual = DateTime.Now;
        var diasAtraso = CalcularDiasAtraso(dataVencimento, dataAtual);

        decimal valorJuros = 0;
        decimal valorTotal = valorOriginal;

        if (diasAtraso > 0)
        {
            valorJuros = valorOriginal * (2.5m / 100) * diasAtraso;
            valorTotal = valorOriginal + valorJuros;
        }

        return new CalculoJuros
        {
            ValorOriginal = Math.Round(valorOriginal, 2),
            DataVencimento = dataVencimento,
            DataAtual = dataAtual,
            MultaPorDia = 2.5m,
            ValorJuros = Math.Round(valorJuros, 2),
            ValorTotal = Math.Round(valorTotal, 2),
            DiasAtraso = diasAtraso
        };

    }
        private int CalcularDiasAtraso(DateTime dataVencimento, DateTime dataAtual)
        {
            var diferenca = dataAtual - dataVencimento;
            if (dataAtual > dataVencimento)
            {
            return diferenca.Days;
            }
            return 0;
        }
}