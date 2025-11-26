import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CalculoJurosRequest {
  valorOriginal: number;
  dataVencimento: string;
}

export interface CalculoJurosResponse {
  valorOriginal: number;
  dataVencimento: string;
  dataAtual: string;
  multaPorDia: number;
  valorJuros: number;
  valorTotal: number;
  diasAtraso: number;
}

@Injectable({
  providedIn: 'root'
})
export class JurosService {
  private apiUrl = 'http://localhost:5297/api/juros';

  constructor(private http: HttpClient) { }

  calcularJuros(request: CalculoJurosRequest): Observable<CalculoJurosResponse> {
    return this.http.post<CalculoJurosResponse>(`${this.apiUrl}/calcular`, request);
  }
}