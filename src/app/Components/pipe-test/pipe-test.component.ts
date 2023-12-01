import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss']
})
export class PipeTestComponent {

  title ='hello my title';

  mydate = new Date();

  cur: number= 175;

  data = {
           id: {test:10},
           name : 'Mahesh'
  }

}
