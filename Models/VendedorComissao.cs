namespace DesafioTarget.API.Models
{
    public class VendedorComissao
    {
        public string Vendedor { get; set; } = string.Empty;
        public List<VendaComissao> VendasComComissao { get; set; } = new List<VendaComissao>();
    }

    public class VendaComissao
    {
        public decimal ValorVenda { get; set; }
        public decimal Comissao { get; set; }
        public decimal PercentualComissao { get; set; }
    }
}