import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
