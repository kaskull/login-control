import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TimerService } from '../../services/timer.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let timerService: TimerService;
  let router: Router;
  let httpClient: HttpClient;
  
  const routerStub = {
    navigate: (route: string) => { }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ TimerService, { provide: Router, useValue: routerStub } ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    timerService = TestBed.inject(TimerService);
    router = TestBed.inject(Router)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.spyOn(router, 'navigate').mockReset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call formValidate', () => {
    const mock = { email: 'cspy@gft.com', lastLoginTime: 1633570709294 };
    const spy = jest.spyOn(httpClient, 'get');
    spy.mockReturnValue(of(mock));
    const test = jest.spyOn(timerService, 'checkUser').mockReturnValue(
      of({ email: 'cspy@gft.com', lastLoginTime: 1633570709294 })
    );
    component.formValidate();
    expect(test).toHaveBeenCalled();
  });
});
