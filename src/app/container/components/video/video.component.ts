import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

  @Output() emiteChamadaCancelada = new EventEmitter<any>();
  @Input() nome: string = 'Username';

  constructor(private readonly router: Router) {}

  cancelaChamada() {
    this.router.navigate(['teleconsulta']);
    this.emiteChamadaCancelada.emit();
  }
}
