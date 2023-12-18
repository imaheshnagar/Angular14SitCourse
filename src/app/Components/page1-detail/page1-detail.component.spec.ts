import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1DetailComponent } from './page1-detail.component';

describe('Page1DetailComponent', () => {
  let component: Page1DetailComponent;
  let fixture: ComponentFixture<Page1DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page1DetailComponent]
    });
    fixture = TestBed.createComponent(Page1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
