import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components//home/home.component';
import { DashComponent } from './shared/components//dash/dash.component';
import { LoginComponent } from './shared/components//login/login.component';
import { NewpasswordComponent } from './shared/components//newpassword/newpassword.component';
import { RecoveryPasswordComponent } from './shared/components//recovery-password/recovery-password.component';
import { ErrorComponent } from './shared/components//error/error.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    LoginComponent,
    NewpasswordComponent,
    RecoveryPasswordComponent,
    ErrorComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
