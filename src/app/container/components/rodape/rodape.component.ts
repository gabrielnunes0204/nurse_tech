import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

  contato: string = '(11) 98877-6655';
  url_instagram: string = '@Instagram';
  url_facebook: string = '@Facebook';
}
