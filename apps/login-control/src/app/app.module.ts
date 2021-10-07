import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './views/timer/timer.component';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './components/clock/clock.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, TimerComponent, ClockComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
