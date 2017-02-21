import { Component, Input } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent {

  @Input() nome: string;
  @Input() telefone: string;
  @Input() email: string;
  @Input() tipo: string;
}