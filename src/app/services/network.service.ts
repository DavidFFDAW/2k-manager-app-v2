import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertNotification } from './alert.notification.service';

declare const window: Window;

@Injectable({ providedIn: 'root' })
export class NetworkService {

  private onlineOfflineSubject = new Subject<boolean>();

  get isOnline(): boolean {
    return window.navigator.onLine;
  }

  get connectionChanged(): Observable<boolean> {
    return this.onlineOfflineSubject.asObservable();
  }

  constructor(private notification: AlertNotification) { 
    console.log('NetworkService.constructor');
    
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
    
    console.log('Current network status is: ', this.isOnline ? 'Online': 'Offline');
  }

  private getAlertMessageAndTitle(): { message: string, title: string } {
    return this.isOnline 
      ? { message: 'Se ha establecido la conexion', title: 'Online' } 
      : { message: 'Se ha perdido la conexion', title: 'Offline' }
    ;
  }

  // ? Emit the current online/offline status to the subscribers
  private updateOnlineStatus(): void {
    const type = this.isOnline ? AlertNotification.SUCCESS : AlertNotification.ERROR;
    const { message, title } = this.getAlertMessageAndTitle();

    this.notification.showAlertByType(type, title, message);

    this.onlineOfflineSubject.next(window.navigator.onLine);
  }

}
