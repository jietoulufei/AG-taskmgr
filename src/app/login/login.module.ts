import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { LoginRoutingModule } from './login-routing-module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
