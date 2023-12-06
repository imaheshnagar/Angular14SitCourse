import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ="App Component"

  myheading = 'Angular Heading';
  
  todayDate = new Date();

  // updataData(updatedHeading:any )
  // {
  //     console.log(this.myheading); 
  //     this.myheading = updatedHeading ;
  //     console.log(updatedHeading); 
  // }
 

  showData()
  {
    console.log(this.myheading); 
  }

}
