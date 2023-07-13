import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  ListaTarefas: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.ListaTarefas = [
      { id: 0, nome: 'Lavar o Carro', concluida: false },
      { id: 1, nome: 'Ir ao mercado', concluida: true },
      { id: 2, nome: 'Lavar louça', concluida: false }
    ];
  }

  adicionar(nomeTarefa:string){
     this.ListaTarefas.push({id: this.ListaTarefas.length, nome: nomeTarefa, concluida: false})
  }
}
