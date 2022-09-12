import { Component, OnInit } from '@angular/core';
import { AlertNotification } from 'src/app/services/alert.notification.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private notification: AlertNotification,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.tryLogin();
  }

  public tryLogin(): void {
    this.auth.tryLogin({
      email: '',
      password: ''
    }).subscribe({
      next: ({ api_token }) => {},
      error: ({error}) => {
        this.showSnackBar(error.message);
      }
    });
  }

  public showSnackBar( message: string): void {
    this.snackBar.open(message, 'Aceptar', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
