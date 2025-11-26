using System.Data.SqlTypes;

namespace DesafioTarget.API.Models;

public class Movimentacao
{
    public int Id { get; set; }
    public int CodigoProduto { get; set; }
    public string Descricao { get; set; } = string.Empty;
    public int Quantidade { get; set; }
    public DateTime DataMovimentacao { get; set; } = DateTime.Now;
    public string TipoMovimentacao { get; set; } = string.Empty; 
}