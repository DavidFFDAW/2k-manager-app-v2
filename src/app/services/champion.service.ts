import { Injectable } from '@angular/core';
import { OnlineOfflineService } from './online.offline.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private champions: Array<string> = [];

  constructor(
    private readonly onlineOfflineService: OnlineOfflineService
  ) { 
    console.log('ChampionService.constructor');
    this.registerToEvents(this.onlineOfflineService);
    
  }

  public getChampions(): Array<string> {
    return this.champions;
  }

  public addChampion(champion: string): void {
    this.champions.push(champion);
  }

  public removeChampion(champion: string): void {
    this.champions = this.champions.filter(c => c !== champion);
  }

  public registerToEvents(event: OnlineOfflineService): void {
    event.connectionChanged.subscribe(isOnline => {
      if (isOnline) {
        console.log('Online');
        
      } else {
        console.log('Offline');
      }
    });
  }

}
