import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PipeTestComponent } from './Components/pipe-test/pipe-test.component';
import { TodolistComponent } from './Components/todolist/todolist/todolist.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:"aboutus",component:AboutUsComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"pipetest",component:PipeTestComponent},
  {path:"todolist",component:TodolistComponent},
  {path:"parent",component:ParentComponent},
  {path:'productlist',component:ProductListComponent},


  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
