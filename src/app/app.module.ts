import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NacbarComponent } from './Components/nacbar/nacbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import { PipeTestComponent } from './Components/pipe-test/pipe-test.component';
import { SalesModule } from './SalesModule/sales/sales.module';
import { TodolistComponent } from './Components/todolist/todolist/todolist.component';
import { TodotaskComponent } from './Components/todolist/todotask/todotask.component';
import { FtoCtempConversionPipe } from './Pipes/fto-ctemp-conversion.pipe';
import { CompformoduleComponent } from './Components/compformodule/compformodule.component';
import { StatusTextPipe } from './Pipes/status-text.pipe';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
//import { KmtometerPipe } from './Pipes/kmtometer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    NacbarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    PipeTestComponent,
    TodolistComponent,
    TodotaskComponent,
    FtoCtempConversionPipe,
    CompformoduleComponent,
    StatusTextPipe,
    ParentComponent,
    ChildComponent,
    //KmtometerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    SalesModule
  ],
  providers: [],//service
  bootstrap: [AppComponent]
})
export class AppModule { }
