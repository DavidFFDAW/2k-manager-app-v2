import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { routes } from 'src/app/consts/routes';

@Injectable({
  providedIn: 'root'
})
export class NotTokenizedRouteGuard implements CanActivate {
  public routers: typeof routes = routes;

  constructor(
    private router: Router,
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem(AppSettings.APP_LOCALSTORAGE_TOKEN);
    console.log('Guard-not-token: ', token);

    if (token) {
      this.router.navigate([this.routers.HOME]);
    }
    return !token;
  }
  
}
