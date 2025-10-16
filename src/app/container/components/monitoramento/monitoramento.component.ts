import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { recuperaDataAtual } from '../../utils/data-utils';
import { ListaValores } from '../../model/listaValores';

@Component({
  selector: 'app-monitoramento',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CabecalhoComponent,
    RodapeComponent
  ],
  templateUrl: './monitoramento.component.html',
  styleUrl: './monitoramento.component.css'
})
export class MonitoramentoComponent {

  refeicao: string = '';
  valorRefeicaoAntes: number | null = null;
  valorRefeicaoDepois: number | null = null;
  dataHoje: string = '';
  exibeCamposValoresBotao: boolean = false;
  exibeResultado: boolean = false;
  habilitaBotaoInsercao: boolean = false;
  paginaAtual: number = 0;
  listaValoresGlicemia: ListaValores[] = [];
  
  habilitaValores() {
    this.exibeCamposValoresBotao = true;
  }

  habilitaBotao() {
    if (this.valorRefeicaoAntes && this.valorRefeicaoDepois) {
      this.habilitaBotaoInsercao = true;
    }
  }

  inserir() {
    this.exibeResultado = true;
    this.habilitaBotaoInsercao = false;
    this.exibeCamposValoresBotao = false;
    this.dataHoje = recuperaDataAtual();

    this.listaValoresGlicemia.push( 
      {
        data:  this.dataHoje, valorAntes: this.valorRefeicaoAntes, valorDepois: this.valorRefeicaoDepois
      }
    );

    this.limparCampos();
  }

  limparCampos() {
    this.valorRefeicaoAntes = null;
    this.valorRefeicaoDepois = null;
  }

  get itemAtual() {
    return this.listaValoresGlicemia[this.paginaAtual];
  }

  get totalPaginas() {
    return this.listaValoresGlicemia.length;
  }

  proximaPagina() {
    if (this.paginaAtual < this.totalPaginas - 1) {
      this.paginaAtual++;
    }
  }

  paginaAnterior() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
    }
}
}
