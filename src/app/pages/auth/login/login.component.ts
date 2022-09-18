import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { AppSettings } from 'src/app/app.settings';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;
  private mailValidators = [Validators.required, Validators.email, Validators.minLength(5)];
  private passwordValidators = [Validators.required, Validators.minLength(8)];

  constructor(
    private auth: AuthService,
    private snackBar: SnackBarService
  ) { 
    this.form = new FormGroup({
      email: new FormControl('', this.mailValidators),
      password: new FormControl('', this.passwordValidators),
    });
  }

  ngOnInit(): void { }

  public getForm(): FormGroup {
    return this.form;
  }

  public isFormValid(): boolean {
    return this.form.valid;
  }

  public validateAndTryLogin(): void {
    if (this.isFormValid()) {
      return this.tryLogin();
    }
    this.snackBar.showSnackBar('Por favor, revise los datos ingresados');
  }

  private tryLogin(): void {
    this.auth.tryLogin({
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    }).subscribe({
      next: (resp) => {
        this.snackBar.showSnackBar('Bienvenido');
      },
      error: ({ error }) => {
        window.navigator.vibrate(AppSettings.VIBRATION_DEFAULT_PATTERN);
        this.snackBar.showSnackBar(error.message);
      }
    });
  }
}
