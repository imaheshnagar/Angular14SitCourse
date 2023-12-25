import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/Services/todo.service';

@Component({
  selector: 'app-todowithservice',
  templateUrl: './todowithservice.component.html',
  styleUrls: ['./todowithservice.component.scss']
})
export class TodowithserviceComponent implements OnInit {

  constructor(private todoser:TodoService){
    
  }
  ngOnInit(): void {
    this.todoser.getTodoList();

    // this.todoser.AddTodo();

    // this.todoser.UpdateTodo();

    //this.todoser.DeleteTodo();
  }



}
