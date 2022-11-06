import { Component, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/classes/todos';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  @Input() todosList?: Todos[];

  constructor() { }

  ngOnInit(): void {
  }

}
