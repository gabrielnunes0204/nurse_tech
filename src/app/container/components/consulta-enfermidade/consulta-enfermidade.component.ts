import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-enfermidade',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CabecalhoComponent,
    RodapeComponent
  ],
  templateUrl: './consulta-enfermidade.component.html',
  styleUrl: './consulta-enfermidade.component.css'
})
export class ConsultaEnfermidadeComponent {

  resultado: string = '';
  enfermidade: string = '';

  grupoDeEnfermidades: { [key: string]: string } = {
    'dor de cabeça': 'A dor de cabeça pode ser causada por estresse, desidratação ou enxaqueca.',
    'enjoo': 'O enjoo pode estar relacionado a distúrbios digestivos ou labirintite.',
    'febre': 'A febre é um sinal comum de infecção ou inflamação no corpo.',
    'tosse': 'A tosse pode indicar infecções respiratórias ou alergias.',
    'dor abdominal': 'Pode estar relacionada a problemas gastrointestinais, como gastrite ou infecção.'
  };

  pesquisar() {
    const termo = this.enfermidade.trim().toLowerCase();
    const chaves = Object.keys(this.grupoDeEnfermidades);
    const chaveEncontrada = chaves.find(chave => termo.includes(chave));

    if (chaveEncontrada) {
      this.resultado = this.grupoDeEnfermidades[chaveEncontrada];
    } else {
      this.resultado = 'Nenhuma informação encontrada para o termo informado.';
    }
  }
}
