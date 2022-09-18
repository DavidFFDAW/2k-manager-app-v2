import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from './network.service';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private champions: Array<string> = [];

  constructor(
    private readonly networkService: NetworkService,
    private http: HttpClient
  ) { 
    this.registerToEvents(this.networkService);
    
  }

  public getChampions(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT_CHAMPIONS);
  }

  public addChampion(champion: string): void {
    this.champions.push(champion);
  }

  public removeChampion(champion: string): void {
    this.champions = this.champions.filter(c => c !== champion);
  }

  public registerToEvents(event: NetworkService): void {
    event.connectionChanged.subscribe(isOnline => {
      if (isOnline) {
        // means that connection has changed back to online
        console.log('Online');
        
      } else {
        console.log('Offline');
      }
    });
  }

}
