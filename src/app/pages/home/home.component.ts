import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isUserLogged: boolean = false;

  constructor(
    private authService: AuthService
  ) { 
    this.checkSession();
    
  }

  ngOnInit(): void { }

  public checkSession(): void {
    this.isUserLogged = this.authService.isLoggedIn();
  }

  public logout (): void {
    this.authService.logout();
  }

}
