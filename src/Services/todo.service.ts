import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todotask } from 'src/app/interfaces/todotask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  ApiUrl = "http://localhost:3000/todo";

  constructor(private httpser: HttpClient) {

   }

   getTodoList()
   {
    return this.httpser.get<todotask[]>(this.ApiUrl) ;
   }

   AddTodo(todo: todotask)
   {
    return this.httpser.post(this.ApiUrl,todo)
   }

   UpdateTodo()
   {
    this.httpser.put(this.ApiUrl + '/10' ,
          {
            "id":10,
            "title":"morning task  5",
            "detail":"morning task detail 5 ",
            "status":2
          }
      ).subscribe(
      {
         next:(data)=> {
          console.log(data);
        }
      }
    
    )
   }

   DeleteTodo(taskid:number)
   {
    return this.httpser.delete(this.ApiUrl + '/' + taskid) ;
   }


}
