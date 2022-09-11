import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AppSettings } from 'src/app/app.settings';
import { Injectable } from '@angular/core';
import { routes } from 'src/app/consts/routes';
import { AlertNotification } from 'src/app/services/alert.notification.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    public routers: typeof routes = routes;

    constructor(
        private router: Router,
        private notification: AlertNotification
        ) {
    }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token = localStorage.getItem(AppSettings.APP_LOCALSTORAGE_TOKEN);
  
      if (token) {
        return true;
      } else {
        this.notification.showInfo(
            'SIN ACCESO',
            'No tiene permisos para acceder a esta ruta'
        );
        this.router.navigate([this.routers.LOGIN]);
      }
      return false;
    }
}