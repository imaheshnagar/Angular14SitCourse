import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //Arrange
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));
  
  it('should create the app', () => {
    //Action
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    //Assert
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular14SitCourse'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular14SitCourse');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angular14SitCourse app is running!');
  });
});
