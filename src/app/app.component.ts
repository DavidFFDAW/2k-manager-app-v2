import { Component } from '@angular/core';
import { OnlineOfflineService } from './services/online.offline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private networkService: OnlineOfflineService) { }
  
  title = 'Online-Offline';

}
