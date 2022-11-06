import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/classes/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todo: Todos[];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todo = this.todosService.listaTodos;
  }

  removeTodo(id: Todos): {
    this.todosService.removeTodo(id);
  }

}
