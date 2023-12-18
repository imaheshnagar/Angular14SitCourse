import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

taskname: string = "Task 1";
color = 'green';
show =false ;
num = 0 ;

cssapplied = { primary: true, big: true };
changecss()
{
  this.cssapplied = { primary: false, big: true };
}

persons = [
  {name:'mahesh',gender:'M',age:47},
  {name:'rajesh',gender:'M',age:41},
  {name:'sonal',gender:'F',age:45},
  {name:'mahesh2',gender:'M',age:47},
  {name:'rajesh2',gender:'M',age:41},
  {name:'sonal2',gender:'F',age:45}
]

updatetaskName($event: Event,arg0: string) {
   console.log($event);
    this.taskname = arg0;
}

updatedvaluefromchild($event: boolean) {
  console.log($event);
}


  

}
