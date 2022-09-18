import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSettings } from 'src/app/app.settings';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      passphrase: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  public getForm(): FormGroup {
    return this.form;
  }

  public isFormValid(): boolean {
    return this.form.valid;
  }

  public validateAndTryRegister(): void {
    if (this.isFormValid()) {
      return this.tryRegister();
    }
    this.snackBar.showSnackBar('El email o la contraseña no son válidos');
  }

  private generatePassphrase(): string {
    return v4().slice(0, 12);
  }

  private getRegisterData(): { email: string, password: string, passphrase: string } {
    return {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      passphrase: this.form.get('passphrase')?.value || this.generatePassphrase(),
    };
  }

  private tryRegister(): void {
    this.auth.tryRegister(this.getRegisterData()).subscribe({
      error: ({ error }) => {
        window.navigator.vibrate(AppSettings.VIBRATION_DEFAULT_PATTERN);
        this.snackBar.showSnackBar(error.message);
      }
    });
  }
}
