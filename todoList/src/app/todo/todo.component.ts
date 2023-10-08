import { Component } from '@angular/core';
import { Todo } from '../class/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoValue: String = "";

  todoList: Todo[] = [
    {
      content: "Todo 1",
      value: false
    },
    {
      content: "Todo 2",
      value: false
    },
    {
      content: "Todo 3",
      value: false
    },
  ];


  constructor(){

  }

  changeTodo(){

  }

  addTodo(){
    if(this.todoValue.length){
    this.todoList.push({content:this.todoValue, value: false});
    this.todoValue = "";
  }}
}
