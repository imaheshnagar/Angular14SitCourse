import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodowithserviceComponent } from './todowithservice.component';

describe('TodowithserviceComponent', () => {
  let component: TodowithserviceComponent;
  let fixture: ComponentFixture<TodowithserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodowithserviceComponent]
    });
    fixture = TestBed.createComponent(TodowithserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
