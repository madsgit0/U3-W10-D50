import { Component, OnInit } from '@angular/core';
import { Todos } from '../classes/todos';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss']
})
export class TodosPage implements OnInit {
  listaTodos: Todos[] = [{
    todo: "fare l'esercizio",
  }]


  constructor() { }

  ngOnInit(): void {
  }

}
