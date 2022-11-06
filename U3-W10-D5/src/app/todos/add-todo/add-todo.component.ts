import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/classes/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todos: any;

  constructor() { }

  ngOnInit(): void {
  }

  createTodo(obj: Todos){
    this.todos.service.addTodo(obj)
  }

}
