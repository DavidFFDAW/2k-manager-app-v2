import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/modules/shared.module';
import { ChampionsComponent } from './champions.component';
import { ChampionsRoutingModule } from './champion-routing.module';


@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    MatCardModule,
    SharedModule,
    ChampionsRoutingModule
  ],
  providers: [],
})
export class ChampionsModule { }
