import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: ContatoModel [] = [];
  @Output() idClicado =  new EventEmitter();

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit() {
    this.dataBaseService.enviarContato.subscribe(contatos => this.listaDeContatos = contatos);
  }

  contatoClidado(item: number) {
    this.idClicado.emit(item);
  }
}