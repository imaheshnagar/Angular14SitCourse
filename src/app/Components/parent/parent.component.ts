import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  ParentData: string = 'I am Parent Data';

  handlekeydown(event: any) {
    this.ParentData = event.target.value;
    // console.log(event);
  }

  handleclick(event: any) {
    console.log(event);
  }
}
