import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/Services/todo.service';
import { todotask } from '../interfaces/todotask';

@Component({
  selector: 'app-todowithservice',
  templateUrl: './todowithservice.component.html',
  styleUrls: ['./todowithservice.component.scss']
})
export class TodowithserviceComponent implements OnInit {


  constructor(private todoser:TodoService){
    
  }

  todolistdata! :Observable<todotask[]>;

  ngOnInit(): void {
    this.gettodolist();
  }

  delete(taskid:number|undefined) {
    this.todoser.DeleteTodo(taskid||0).subscribe(
      {
         next:(data)=> {
          console.log(data);
        },
        error:(err)=>console.log(err)

      }
    
    );
    this.gettodolist();
  }

  gettodolist()
  {
    this.todolistdata = this.todoser.getTodoList() ;
  }

  Add(title: string,desc: string) {

     let todo :todotask ={
      title,
      detail:desc,
      status:1
     }

       this.todoser.AddTodo(todo).subscribe(
        {
           next:(data)=> {
            console.log(data);
          },
          error:(err)=>console.log(err)

        }
      
      );
      this.gettodolist();
    }

}

  
    


