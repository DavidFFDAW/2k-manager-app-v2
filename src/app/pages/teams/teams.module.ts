import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    SharedModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
