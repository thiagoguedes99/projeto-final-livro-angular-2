import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  enviado: boolean = false;

  _nome: string;
  _telefone: string;
  _email: string;
  _tipo: string;

  tipos: string [] = ['Particular', 'Trabalho', 'Amigos', 'Família'];

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit() {
  }

  enviarDados() {
    if(this._tipo == undefined){
      this._tipo = this.tipos[0];
    }

    let novoContato = new ContatoModel(this._nome, this._telefone, this._email, this._tipo);

    this.dataBaseService.setContato(novoContato);

    this.enviado = ! this.enviado;
  }

  voltar() {
    this._nome = '';
    this._telefone = '';
    this._email = '';
    this._tipo = '';
    this.enviado = ! this.enviado;
  }
}