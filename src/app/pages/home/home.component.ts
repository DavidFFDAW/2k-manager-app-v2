import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void { console.log('HomeComponent redered'); }

  public isSessionInitiated(): boolean {
    return this.authService.isLoggedIn();
  }

  public logout (): void {
    console.log('Logging out of the app');    
    this.authService.logout();
  }

}
