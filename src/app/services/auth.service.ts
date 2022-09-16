import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AppSettings } from '../app.settings';
import { HttpResponse } from '../shared/interfaces/http.response.interface';
import { AlertNotification } from './alert.notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public tryLogin(credentials: {
    email: string,
    password: string,
  }): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(AppSettings.API_ENDPOINT_AUTH, credentials).pipe(
      tap(({ api_token }: HttpResponse) => {
        if (api_token) localStorage.setItem(AppSettings.APP_LOCALSTORAGE_TOKEN, api_token)
        this.router.navigate(['/home']);
      }),
      shareReplay()
    );
  }

  public logout(): void {
    localStorage.removeItem(AppSettings.APP_LOCALSTORAGE_TOKEN);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(AppSettings.APP_LOCALSTORAGE_TOKEN);
  }

  public tryRegister(credentials: {
    email: string,
    password: string,
    passphrase: string,
  }): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(AppSettings.API_ENDPOINT_REGISTER, credentials).pipe(
      tap(({ api_token }: HttpResponse) => {
        if (api_token) localStorage.setItem(AppSettings.APP_LOCALSTORAGE_TOKEN, api_token)
      }),
      shareReplay()
    );
  }
}
