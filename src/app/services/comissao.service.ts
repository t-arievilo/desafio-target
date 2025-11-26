import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Venda {
  vendedor: string;
  valor: number;
}

export interface VendaComComissao {
  valorVenda: number;
  comissao: number;
  percentualComissao: number;
}

export interface VendedorComissao {
  vendedor: string;
  vendasComComissao: VendaComComissao[];
}

export interface VendasData {
  vendas: Venda[];
}

@Injectable({
  providedIn: 'root'
})
export class ComissaoService {
  private apiUrl = 'http://localhost:5297/api/comissoes';

  constructor(private  http: HttpClient) { }

  calcularComissoes(vendas: Venda[]): Observable<VendedorComissao[]> {
    const body: VendasData = { vendas };
    return this.http.post<VendedorComissao[]>(`${this.apiUrl}/calcular`, body);
  }
}
