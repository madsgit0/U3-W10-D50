import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosPage } from './todos/todos.page';
import { CompletatiPage } from './completati/completati.page';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosPage
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },{
    path: 'completati',
    component: CompletatiPage
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosPage,
    CompletatiPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
