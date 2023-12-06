import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

 @Input() myparentData :string ="";

 @Output() appChildclickevent:EventEmitter<string> = new EventEmitter();


 generateEvent()
 {
    this.appChildclickevent.emit('child data');
 }


}
