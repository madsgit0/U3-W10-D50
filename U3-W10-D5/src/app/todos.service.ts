import { Injectable } from '@angular/core';
import { Todos } from './classes/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  listaTodos: Todos[] = [{
    todo: "fare l'esercizio",
  }]

  constructor() { }

  removeTodo(id: Todos){
    this.listaTodos.splice(id, Object)
  }

  addTodo(object: Todos){
    this.listaTodos.push()
  }
}
