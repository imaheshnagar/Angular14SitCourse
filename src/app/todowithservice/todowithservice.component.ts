import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/Services/todo.service';
import { todotask } from '../interfaces/todotask';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-todowithservice',
  templateUrl: './todowithservice.component.html',
  styleUrls: ['./todowithservice.component.scss']
})
export class TodowithserviceComponent implements OnInit {


  constructor(private todoser:TodoService){
    
  }

  todolistdata! :Observable<todotask[]>;
  todoTask:Observable<todotask> |undefined;

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
 
  edit(taskid:number|undefined) {
   
   this.todoTask = this.todoser.GetTaskById(taskid||0)
    
  }

  gettodolist()
  {
    this.todolistdata = this.todoser.getTodoList() ;
  }

  update(id: number,title: string,detail: string,status: number|string) {

  let  taskstatus = status as number;

    let todo :todotask ={
      id,
      title,
      detail,
      status:taskstatus 
     }

       this.todoser.UpdateTodo(todo).subscribe(
        {
           next:(data)=> {
            console.log(data);
          },
          error:(err)=>console.log(err),
          complete:()=>{}

        }
      
      );
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
          error:(err)=>console.log(err),
          complete:()=>{}

        }
      
      );
      this.gettodolist();
    }

}

  
    


