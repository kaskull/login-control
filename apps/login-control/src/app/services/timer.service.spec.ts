import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TimerService } from './timer.service';

describe('TimerComponent', () => {
  let service: TimerService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TimerService],
    });
    httpClient = TestBed.inject(HttpClient);
    service = new TimerService(httpClient);
  });

  it('should be create', () => {
    expect(service).toBeTruthy();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should check user', () => {
    const mock = { email: 'cspy@gft.com', lastLoginTime: 1633570709294 };
    let result;
    const spy = jest.spyOn(httpClient, 'get');
    spy.mockReturnValue(of(mock));
    const user = { email: 'cspy@gft.com', password: 'test' };
    service.checkUser(user).subscribe((data) => (result = data));
    expect(result).toEqual(mock);
  });

  it('should update user', () => {
    const mock = [
      { email: 'cspy@gft.com', lastLoginTime: 123345456 },
      { email: 'cspy@bbva.com', lastLoginTime: 1633570709294 },
    ];
    let result;
    const spy = jest.spyOn(httpClient, 'post');
    spy.mockReturnValue(of(mock));
    const email = 'cspy@gft.com';
    const date = 123345456;
    service.updateUser(email, date).subscribe((data) => (result = data));
    expect(result).toEqual(mock);
  });
});
