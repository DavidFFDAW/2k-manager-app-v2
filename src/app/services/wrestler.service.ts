import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from './network.service';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class WrestlerService {


  constructor(
    private readonly networkService: NetworkService,
    private http: HttpClient
  ) { 
    this.registerToEvents(this.networkService);
    
  }

  public findAll(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT_WRESTLERS);
  }


  public registerToEvents(event: NetworkService): void {
    event.connectionChanged.subscribe(isOnline => {
      if (isOnline) {
        // means that connection has changed back to online
        
      } else {

      }
    });
  }

}
