import { Component, OnInit } from '@angular/core';
import{Todo} from '../../Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  localItem;
  todos:Todo[];
  constructor() {
    this.localItem=localStorage.getItem('todos');
    if(this.localItem==null)
    {
      this.todos=[];
    }
    else
    {
      this.todos=JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }

  Deletetodo(todo:Todo){
     
     console.warn(todo);
     const index=this.todos.indexOf(todo);
     this.todos.splice(index,1)
     localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  todoAdd(todo:Todo){
     
    console.warn(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
 }
 todotoggle(todo:Todo){
  console.warn('yogi');

  const index=this.todos.indexOf(todo);
  this.todos[index].active=!this.todos[index].active;
  localStorage.setItem('todos', JSON.stringify(this.todos));

}
}
