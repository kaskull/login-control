import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'login-control-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private timerService: TimerService) { }
  
  formValidate(){
    this.timerService.checkUser(this.userForm.value).subscribe(data => {
      if(data){
        this.router.navigateByUrl(`timer`);
      }
    });
  }

  ngOnInit(): void { }

}
