import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'login-control-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() number: number | null; 
  @Input() label: string | null; 

  constructor() { }

  ngOnInit(): void {
  }

}
