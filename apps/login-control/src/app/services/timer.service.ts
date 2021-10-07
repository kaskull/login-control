import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLastLogin } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  apiEndPoint = 'http://localhost:3000';
  userData: Observable<UserLastLogin>;
  
  constructor(private http: HttpClient) { }  
  
  checkUser(user: any) {
    this.userData = this.http.get<UserLastLogin>(`${this.apiEndPoint}/checkUser`, {params:user});
    return this.userData;
  }

  getUser() {
    return this.userData;
  }

  updateUser(email: string, date: number){
    const result = this.http.post<any>(`${this.apiEndPoint}/updateUser`, {params:{email: email, date: date}});
    return result;
  }
}
