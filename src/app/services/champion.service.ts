import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private champions: Array<string> = [];

  constructor(
    private readonly networkService: NetworkService
  ) { 
    console.log('ChampionService.constructor');
    this.registerToEvents(this.networkService);
    
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
