import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();

  
  constructor() { }
  
  
  ngOnInit(): void {
  }

  onSubmit(data:any){
    const todo={
      sno:8,
      title:data.title,
      desc:data.discription,
      active:true,
    }
    this.todoAdd.emit(todo);
  }
}
