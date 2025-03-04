import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerproService } from '../../services/serpro.service';


@Component({
  selector: 'app-consulta',
  imports: [CommonModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
  resultado: any;
  dados = {
    contratante: { numero: 1},
    autorPedidoDados: { numero: 2},
    conntribuinte: { numero: 3},
    pedidoDados: { idSistema: "CONSULTASITUACAODTE111", versaoSistema: "1.0"}
  };

  constructor(private serproService: SerproService){}

  consultar() {
    this.serproService.consultarSituacao(this.dados).subscribe({
      next: (resposta: any) => {
        console.log('Status code:', resposta.Status);
        console.log('Resposta da API:', resposta);
        this.resultado = resposta;
        
      },
      error: (erro: any) => {
        console.error('Erro na requisição', erro);
      }
    });
  }

}
