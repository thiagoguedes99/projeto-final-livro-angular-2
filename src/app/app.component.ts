import { Component } from '@angular/core';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { ContatoModel } from './modelos/contato-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Contatos com Angular 2';

  contatoclicado: ContatoModel;
  nomeContato: string;
  telefoneContato: string;
  emailContato: string;
  tipoContato: string;

  constructor(private dataBaseService: ContatosDataBaseService){}

  enviarDetalhe(id): void {
    this.contatoclicado = this.dataBaseService.getContato(id);

    this.nomeContato = this.contatoclicado.nome;
    this.telefoneContato = this.contatoclicado.telefone;
    this.emailContato = this.contatoclicado.email;
    this.tipoContato = this.contatoclicado.tipo;
  }
}
