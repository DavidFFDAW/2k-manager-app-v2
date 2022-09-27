import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DialogTeamsComponent } from './components/dialog/dialog.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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
