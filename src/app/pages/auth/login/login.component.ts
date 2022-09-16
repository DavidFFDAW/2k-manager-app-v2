import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private snackBar: MatSnackBar
  ) { 
    this.form = new FormGroup({
      email: new FormControl('', this.mailValidators),
      password: new FormControl('', this.passwordValidators),
    });
  }

  ngOnInit(): void {
    // this.tryLogin();
  }

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
    this.showSnackBar('Por favor, revise los datos ingresados');
  }

  private tryLogin(): void {
    this.auth.tryLogin({
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    }).subscribe({
      error: ({ error }) => {
        window.navigator.vibrate([ 200, 0, 200 ]);
        this.showSnackBar(error.message);
      }
    });
  }

  private showSnackBar( message: string): void {
    this.snackBar.open(message, 'Aceptar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
