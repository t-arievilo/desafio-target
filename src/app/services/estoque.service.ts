import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produto {
  codigoProduto: number;
  descricaoProduto: string;
  estoque: number;
}

export interface MovimentacaoRequest {
  codigoProduto: number;
  descricao: string;
  quantidade: number;
  tipoMovimentacao: string;
}

export interface MovimentacaoResponse {
  movimentacao: {
    id: number;
    codigoProduto: number;
    descricao: string;
    quantidade: number;
    dataMovimentacao: string;
    tipoMovimentacao: string;
  };
  estoqueAtual: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private apiUrl = 'http://localhost:5297/api/estoque';

  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/produtos`);
  }

  registrarMovimentacao(request: MovimentacaoRequest): Observable<MovimentacaoResponse> {
    return this.http.post<MovimentacaoResponse>(`${this.apiUrl}/movimentar`, request);
  }
}