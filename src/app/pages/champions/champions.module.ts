import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/modules/shared.module';
import { ChampionsTableComponent } from './champions.table.component';
import { ChampionsRoutingModule } from './champion-routing.module';


@NgModule({
  declarations: [
    ChampionsTableComponent
  ],
  imports: [
    MatCardModule,
    SharedModule,
    ChampionsRoutingModule
  ],
  providers: [],
})
export class ChampionsModule { }
