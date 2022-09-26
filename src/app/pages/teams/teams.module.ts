import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DialogTeamsComponent } from './components/dialog/dialog.component';
import { TeamFormComponent } from './components/team-form/team-form.component';


@NgModule({
  declarations: [
    TeamsComponent,
    DialogTeamsComponent,
    TeamFormComponent
  ],
  imports: [
    SharedModule,
    TeamsRoutingModule
  ],
  entryComponents: [DialogTeamsComponent]
})
export class TeamsModule { }
