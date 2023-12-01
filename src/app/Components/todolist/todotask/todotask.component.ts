import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.scss']
})
export class TodotaskComponent {

 @Input() taskname!:string ;

  @Output() updatedstatus:EventEmitter<boolean> = new EventEmitter<boolean>();

   updatedTask()
   {

    this.updatedstatus.emit(true);
   }



}
