import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NetworkService } from './services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public isAuthenticated: boolean = false;
  private preferredTheme: MediaQueryList;

  constructor(
    private networkService: NetworkService,
    private auth: AuthService
  ) { 
    this.isAuthenticated = this.auth.isLoggedIn();
    this.preferredTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.autoUpdateTheme();
  }
  
  hasDarkTheme() { 
    return document.body.classList.contains('dark-theme');
  }

  autoUpdateTheme() {
    document.body.classList.toggle('dark-theme', this.preferredTheme.matches);
  }

  title = 'Online-Offline';

}
