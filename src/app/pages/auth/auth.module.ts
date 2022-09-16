import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule
  ]
})
export class LoginModule { }
