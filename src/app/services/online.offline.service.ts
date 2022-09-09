import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';

declare const window: Window;

@Injectable({ providedIn: 'root' })
export class OnlineOfflineService {

  private onlineOfflineSubject = new Subject<boolean>();

  get isOnline(): boolean {
    return window.navigator.onLine;
  }

  get connectionChanged(): Observable<boolean> {
    return this.onlineOfflineSubject.asObservable();
  }

  constructor(private toast: ToastrService) { 
    console.log('OnlineOfflineService.constructor');
    
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
  }

  private getAlertMessageAndTitle(): { message: string, title: string } {
    return this.isOnline 
      ? { message: 'Se ha establecido la conexion', title: 'Online' } 
      : { message: 'Se ha perdido la conexion', title: 'Offline' }
    ;
  }

  // ? Emit the current online/offline status to the subscribers
  private updateOnlineStatus(): void {
    const callback = this.isOnline ? 'success' : 'error';
    const { message, title } = this.getAlertMessageAndTitle();

    const options = {
      timeOut: 2000,
      progressBar: false,
      closeButton: true
    };

    this.toast[callback](message, title, options);

    this.onlineOfflineSubject.next(window.navigator.onLine);
  }

}
