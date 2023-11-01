import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  title= "About Us Component";

    // expression binding 

    CompanyName ='SIT Computer';
    color='blue';
    CourseName= 'Angular';

    Getvalue()
    {
      return 'from Java script';
    }

    SubmitData(datafromHtml:any,datafromHtml2:any) {
        console.log('Data from Html');
        console.log(datafromHtml);
        console.log(datafromHtml2);
      }
      

}
