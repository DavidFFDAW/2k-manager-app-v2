import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,,
    MatButtonModule,
    MatCardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
