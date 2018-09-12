import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppLoginComponent } from './app-login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
describe('AppComponent', () => {

  let component: AppLoginComponent;
  let fixture: ComponentFixture<AppLoginComponent>;
  let submitEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [
        AppLoginComponent
      ],
    });

    fixture = TestBed.createComponent(AppLoginComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));

  }));
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should login successfully', async(() => {
    component.signInForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
    submitEl.triggerEventHandler('click',null);
    component.signInForm.setValue({ 
      username: 'admin',
      password: 'admin'
    });
    component.onClickSubmit();
    expect(component.user).toBeTruthy();
  }));
});
