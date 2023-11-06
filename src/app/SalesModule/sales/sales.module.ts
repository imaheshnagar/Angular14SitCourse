import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { KmtometerPipe } from 'src/app/Pipes/kmtometer.pipe';



@NgModule({
  declarations: [
    DashBoardComponent,
    KmtometerPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[DashBoardComponent]
})
export class SalesModule { }
