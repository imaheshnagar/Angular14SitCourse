import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  taskname: string = "Task 1";

updatetaskName($event: Event,arg0: string) {
   console.log($event);
    this.taskname = arg0;
}

updatedvaluefromchild($event: boolean) {
  console.log($event);
}


  

}
