import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  TAREFA_KEY = 'tarefa-key';
  ListaTarefas: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const tarefas = localStorage.getItem(this.TAREFA_KEY);
    if (tarefas) {
      this.ListaTarefas = JSON.parse(tarefas);
    }
  }

  adicionar(nomeTarefa: string) {
    if (nomeTarefa.trim().length === 0) {
      return;
    }

    const tarefaEncontrada = this.ListaTarefas.find(item => item.nome.toLowerCase() === nomeTarefa.toLowerCase());

    if (!tarefaEncontrada) {
      this.ListaTarefas.push({ id: this.ListaTarefas.length, nome: nomeTarefa, concluida: false });
      this.salvarLista();
    }
  }

  deletar(id: number) {
    this.ListaTarefas = this.ListaTarefas.filter(item => item.id !== id);
    this.salvarLista();
  }

  completar(id: number) {
    const tarefaEncontrada = this.ListaTarefas.find(item => item.id === id);

    if (tarefaEncontrada) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida;
      this.salvarLista();
    }
  }

  private salvarLista() {
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.ListaTarefas));
  }
}
