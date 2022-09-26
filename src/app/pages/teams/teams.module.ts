import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DialogTeamsComponent } from './components/dialog.component';



@NgModule({
  declarations: [
    TeamsComponent,
    DialogTeamsComponent
  ],
  imports: [
    SharedModule,
    TeamsRoutingModule
  ],
  entryComponents: [DialogTeamsComponent]
})
export class TeamsModule { }
