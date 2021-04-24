import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './shared/components/dash/dash.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NewpasswordComponent } from './shared/components/newpassword/newpassword.component';
import { RecoveryPasswordComponent } from './shared/components/recovery-password/recovery-password.component';
import { IsNotLoggedGuard } from './shared/guards/is-not-logged.guard';
import { LoggedInGuard } from './shared/guards/logged-in.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashComponent
  },
  {
    path: 'recovery', component: RecoveryPasswordComponent
  },
  {
    path: 'newpass', component: NewpasswordComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
