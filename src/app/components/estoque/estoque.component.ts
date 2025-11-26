import { Component, OnInit } from '@angular/core';
import {
  EstoqueService,
  Produto,
  MovimentacaoRequest,
  MovimentacaoResponse,
} from '../../services/estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent implements OnInit {
  produtos: Produto[] = [];
  movimentacao: MovimentacaoRequest = {
    codigoProduto: 0,
    descricao: '',
    quantidade: 0,
    tipoMovimentacao: 'ENTRADA',
  };

  carregando = false;
  ultimaMovimentacao: MovimentacaoResponse | null = null;

  constructor(private estoqueService: EstoqueService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.carregando = true;
    this.estoqueService.obterProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        this.carregando = false;

        if (produtos.length > 0 && this.movimentacao.codigoProduto === 0) {
          this.movimentacao.codigoProduto = produtos[0].codigoProduto;
        }
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
        this.carregando = false;
        alert('Erro ao carregar produtos do estoque');
      },
    });
  }

  registrarMovimentacao() {
    if (!this.validarMovimentacao()) return;

    this.carregando = true;
    this.estoqueService.registrarMovimentacao(this.movimentacao).subscribe({
      next: (response) => {
        this.ultimaMovimentacao = response;
        this.carregando = false;

        this.carregarProdutos();

        this.movimentacao.descricao = '';
        this.movimentacao.quantidade = 0;
      },
      error: (erro) => {
        console.error('Erro ao registrar movimentação:', erro);
        this.carregando = false;
        alert(
          'Erro ao registrar movimentação. Verifique o estoque disponível.'
        );
      },
    });
  }

  private validarMovimentacao(): boolean {
    if (this.movimentacao.codigoProduto === 0) {
      alert('Selecione um produto');
      return false;
    }
    if (!this.movimentacao.descricao.trim()) {
      alert('Informe uma descrição para a movimentação');
      return false;
    }
    if (this.movimentacao.quantidade <= 0) {
      alert('A quantidade deve ser maior que zero');
      return false;
    }
    return true;
  }

  getProdutoSelecionado(): Produto | undefined {
    return this.produtos.find(
      (p) => p.codigoProduto === this.movimentacao.codigoProduto
    );
  }

  atualizarQuantidade(event: any) {
    const valor = event.target.value;
    this.movimentacao.quantidade = valor === '' ? 0 : parseInt(valor);
  }
}
