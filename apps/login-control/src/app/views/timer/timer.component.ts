import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLastLogin } from '../../models/user.model';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'login-control-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  userLastLogin: UserLastLogin;
  userLastLoginTime: Date;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  interval = 1000;  

  constructor(private router: Router, private timerService: TimerService) { }

  clockUpdate(){
    this.setTime();
    setTimeout(() => {this.clockUpdate()}, this.interval); 
  }

  setTime(){
    const actualTime = new Date();
    this.days = Math.trunc((actualTime.getTime() - this.userLastLoginTime.getTime())/(1000*60*60*24));
    this.hours = Math.trunc((actualTime.getTime() - this.userLastLoginTime.getTime())/(1000*60*60)%24);
    this.minutes = Math.trunc((actualTime.getTime() - this.userLastLoginTime.getTime())/(1000*60)%60);
    this.seconds = Math.trunc((actualTime.getTime() - this.userLastLoginTime.getTime())/(1000)%60);
  }

  onLogout(){
    this.timerService.updateUser(this.userLastLogin.email, Date.now()).subscribe(() => {
      this.router.navigateByUrl(`/`);
    });    
  }

  ngOnInit(): void {
    this.timerService.getUser().subscribe(data => {
      this.userLastLogin = data;
      this.userLastLoginTime = new Date(this.userLastLogin.lastLoginTime);
      this.clockUpdate();
    });    
  }
}
