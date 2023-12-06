import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompformoduleComponent } from './compformodule.component';

describe('CompformoduleComponent', () => {
  let component: CompformoduleComponent;
  let fixture: ComponentFixture<CompformoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompformoduleComponent]
    });
    fixture = TestBed.createComponent(CompformoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
