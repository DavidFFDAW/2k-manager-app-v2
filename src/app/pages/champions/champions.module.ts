import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/modules/shared.module';
import { ChampionsTableComponent } from './champions.table.component';
import { ChampionsRoutingModule } from './champion-routing.module';
import { WrestlerReignsComponent } from './wrestler-reigns/wrestler-reigns.component';
import { ChampionshipReignsComponent } from './championship-reigns/championship-reigns.component';
import { WrestlerChampionshipReignsComponent } from './wrestler-championship-reigns/wrestler-championship-reigns.component';


@NgModule({
  declarations: [
    ChampionsTableComponent,
    WrestlerReignsComponent,
    ChampionshipReignsComponent,
    WrestlerChampionshipReignsComponent
  ],
  imports: [
    MatCardModule,
    SharedModule,
    ChampionsRoutingModule
  ],
  providers: [],
})
export class ChampionsModule { }
