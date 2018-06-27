import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AblogLoginComponent } from './ablog-login/ablog-login.component';
import { AblogSignupComponent } from './ablog-signup/ablog-signup.component';
import { AblogMainComponent } from './ablog-main/ablog-main.component';

const routes: Routes = [
  { path: '', component: AblogMainComponent },
  { path: 'login', component: AblogLoginComponent },
  { path: 'signup', component: AblogSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}