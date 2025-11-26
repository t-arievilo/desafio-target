import { Component } from '@angular/core';
import {
  JurosService,
  CalculoJurosRequest,
  CalculoJurosResponse,
} from '../../services/juros.service';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent {
  calculo: CalculoJurosRequest = {
    valorOriginal: 0,
    dataVencimento: this.formatarData(new Date()),
  };

  resultado: CalculoJurosResponse | null = null;
  carregando = false;

  constructor(private jurosService: JurosService) {}

  formatarDataExibicao(dataString: string): string {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  }

  calcularJuros() {
    if (!this.validarCalculo()) return;

    this.carregando = true;
    this.jurosService.calcularJuros(this.calculo).subscribe({
      next: (resultado) => {
        this.resultado = resultado;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao calcular juros:', erro);
        this.carregando = false;
        alert('Erro ao calcular juros. Verifique os dados informados.');
      },
    });
  }

  private validarCalculo(): boolean {
    if (this.calculo.valorOriginal <= 0) {
      alert('O valor original deve ser maior que zero');
      return false;
    }

    const dataVencimento = new Date(this.calculo.dataVencimento);
    if (isNaN(dataVencimento.getTime())) {
      alert('Data de vencimento inválida');
      return false;
    }

    return true;
  }

  private formatarData(data: Date): string {
    return data.toISOString().split('T')[0];
  }

  limparCalculo() {
    this.calculo = {
      valorOriginal: 0,
      dataVencimento: this.formatarData(new Date()),
    };
    this.resultado = null;
  }

  getStatusAtraso(): string {
    if (!this.resultado) return '';

    if (this.resultado.diasAtraso === 0) {
      return 'sem-atraso';
    } else if (this.resultado.diasAtraso <= 30) {
      return 'atraso-leve';
    } else {
      return 'atraso-grave';
    }
  }

  atualizarValorOriginal(event: any) {
    const valor = event.target.value;
    this.calculo.valorOriginal = valor === '' ? 0 : parseFloat(valor);
  }
}
