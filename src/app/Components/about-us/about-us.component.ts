import { Component } from '@angular/core';
import { pi } from 'src/app/Data';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  typescriptvariable :number |string|boolean |undefined  ;

  constructor()
  {
  
  }

  title= 'welcome';

    // expression binding 

    CompanyName ='SIT Computer';
    color='blue';
    CourseName= 'Angular';
    pwd=''

    Getvalue()
    {
      return 'from Java script';
    }

    SubmitData(datafromHtml:any,datafromHtml2:any) {

      let x= pi ;
         //null/undefined
      if(this.typescriptvariable != null)
      {
  
      }

       let methodvariable ;
        console.log('Data from Html');
        // console.log(datafromHtml);
        // console.log(datafromHtml2);

        console.log(this.pwd);
        this.pwd ='updated';
      }
      

}
