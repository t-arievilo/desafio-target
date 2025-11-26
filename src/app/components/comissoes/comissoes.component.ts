import { Component } from '@angular/core';
import { ComissaoService, Venda, VendedorComissao } from '../../services/comissao.service';

@Component({
  selector: 'app-comissoes',
  templateUrl: './comissoes.component.html',
  styleUrls: ['./comissoes.component.css']
})
export class ComissoesComponent {
  novaVenda: Venda = { vendedor: '', valor: 0 };
  vendas: Venda[] = [];
  resultado: VendedorComissao[] = [];
  carregando = false;

  constructor(private comissaoService: ComissaoService) {}

  adicionarVenda() {
    if (this.novaVenda.vendedor && this.novaVenda.valor > 0) {
      this.vendas.push({...this.novaVenda});
      this.novaVenda = { vendedor: '', valor: 0 };
    }
  }

  removerVenda(index: number) {
    this.vendas.splice(index, 1);
  }

  calcularComissoes() {
    if (this.vendas.length === 0) {
      alert('Adicione pelo menos uma venda para calcular');
      return;
    }

    this.carregando = true;
    this.comissaoService.calcularComissoes(this.vendas).subscribe({
      next: (resultado) => {
        this.resultado = resultado;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro:', erro);
        this.carregando = false;
        alert('Erro ao calcular comissões');
      }
    });
  }

  limparDados() {
    this.vendas = [];
    this.resultado = [];
  }

  calcularTotalVendedor(vendedor: VendedorComissao): number {
    return vendedor.vendasComComissao.reduce((total, venda) => total + venda.comissao, 0);
  }

  atualizarValorVenda(event: any) {
  const valor = event.target.value;
  this.novaVenda.valor = valor === '' ? 0 : parseFloat(valor);
}
}