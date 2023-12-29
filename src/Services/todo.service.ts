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

   GetTaskById(taskid:number)
   {
    return this.httpser.get<todotask>(this.ApiUrl + '/' + taskid ) ;
   }

   AddTodo(todo: todotask)
   {
    return this.httpser.post(this.ApiUrl,todo)
   }

   UpdateTodo(todo: todotask)
   {
    return this.httpser.put(this.ApiUrl + '/' + todo.id ,todo)
   }

   DeleteTodo(taskid:number)
   {
    return this.httpser.delete(this.ApiUrl + '/' + taskid) ;
   }


}
