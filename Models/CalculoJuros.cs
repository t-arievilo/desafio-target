namespace DesafioTarget.API.Models;

public class CalculoJuros
{
    public decimal ValorOriginal { get; set; }
    public DateTime DataVencimento { get; set; }
    public DateTime DataAtual { get; set; } = DateTime.Now;
    public decimal MultaPorDia { get; set; } = 2.5m;
    public decimal ValorJuros { get; set; }
    public decimal ValorTotal { get; set; }
    public int DiasAtraso {get; set;}
}