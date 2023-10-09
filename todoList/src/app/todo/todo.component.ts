import { Component, TemplateRef } from '@angular/core';
import { Todo } from '../class/todo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoValue: String = "";

  todoList: Todo[] = [
    
  ];

  finishedList: Todo[] = [

  ]

  constructor(private modalService: NgbModal){

  }

  changeTodo(i: number){
    const item = this.todoList.splice(i,1);
    console.log(item)
    this.finishedList.push(item[0])
  }

  addTodo(){
    if(this.todoValue.length){
    this.todoList.push({content:this.todoValue, value: false});
    this.todoValue = "";
  }}

  changeFinished(i: number){
   const item = this.finishedList.splice(i,1)
   console.log(item)
   this.todoList.push(item[0])
  }

  openModal(content: TemplateRef<Element>, i:number, type: String){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result)=>{
        if(type=='todoList'){
          this.todoList.splice(i,1);
        }else{
          this.finishedList.splice(i,1)
        }
      },
      (reason)=>{

      }
    )
  }
}
