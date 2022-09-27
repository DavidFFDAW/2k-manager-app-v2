import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from './network.service';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private readonly networkService: NetworkService,
    private http: HttpClient
  ) { 
    this.registerToEvents(this.networkService);
    
  }

  public getTeams(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT_TEAMS);
  }


  public createTeam(data: any): Observable<any> {
    return this.http.post(AppSettings.API_ENDPOINT_TEAMS, data);
  }


  public remove(id: number): Observable<any> {
    return this.http.delete(`${ AppSettings.API_ENDPOINT_TEAMS }?id=${ id }`);
  }

  // Prepared to sync with the server when connection has been lost
  public registerToEvents(event: NetworkService): void {
    event.connectionChanged.subscribe(isOnline => {
      if (isOnline) {
        // means that connection has changed back to online
        
      } else {

      }
    });
  }

}
