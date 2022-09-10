import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { ChampionsComponent } from './champions.component';
import { ChampionsRoutingModule } from './champion-routing.module';


@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    SharedModule,
    ChampionsRoutingModule
  ],
  providers: [],
})
export class ChampionsModule { }
