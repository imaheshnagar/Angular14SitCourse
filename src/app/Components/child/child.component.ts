import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoService } from 'src/Services/todo.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    DoCheck,
    OnDestroy
{
  constructor(private todo: TodoService) {}

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnInit(): void {
    console.log('own data load');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() myparentData: string = '';

  @Output() appChildclickevent: EventEmitter<string> = new EventEmitter();

  generateEvent() {
    this.appChildclickevent.emit('child data');
  }
}
