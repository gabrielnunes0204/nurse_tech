import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-teleconsulta',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CabecalhoComponent,
    VideoComponent,
    RodapeComponent
  ],
  templateUrl: './teleconsulta.component.html',
  styleUrl: './teleconsulta.component.css'
})
export class TeleconsultaComponent {

  nome: string = '';
  documento: string = '';
  dataNascimento: string = '';
  especialidade: string = '';
  exibeChamada: boolean = false;

  continuar() {
    this.exibeChamada = !this.exibeChamada;
  }

  camposValidos(): boolean {
    if (!this.nome) {
      return false;
    }

    if (!this.documento) {
      return false;
    }

    if (!this.dataNascimento) {
      return false;
    }

    if (!this.especialidade) {
      return false;
    }

    return true;
  }

  chamadaCancelada() {
    this.exibeChamada = !this.exibeChamada;
    this.limpaCampos();
  }

  limpaCampos() {
    this.nome = '';
    this.documento = '';
    this.dataNascimento = '';
    this.especialidade = '';
  }
}
