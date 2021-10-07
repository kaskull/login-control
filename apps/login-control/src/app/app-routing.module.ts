import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './views/timer/timer.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'timer', component: TimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }