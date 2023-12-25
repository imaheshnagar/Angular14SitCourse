import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  ApiUrl = "http://localhost:3000/todo";

  constructor(private httpser: HttpClient) {

   }

   getTodoList()
   {
    this.httpser.get(this.ApiUrl).subscribe(
      {
         next:(data)=> {
          console.log(data);
        },
        error:(err)=> console.log(Error),
        complete:()=>console.log("complete")
      }
    )
   }

   AddTodo()
   {
    this.httpser.post(this.ApiUrl,
        
          {
            "title":"morning task 4",
            "detail":"morning task detail 4 ",
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

   DeleteTodo()
   {
    this.httpser.delete(this.ApiUrl + '/10').subscribe(
      {
         next:(data)=> {
          console.log(data);
        }
      }
    
    )
   }


}
