import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsTableComponent } from './champions.table.component';
import { ChampionshipReignsComponent } from './championship-reigns/championship-reigns.component';
import { WrestlerChampionshipReignsComponent } from './wrestler-championship-reigns/wrestler-championship-reigns.component';
import { WrestlerReignsComponent } from './wrestler-reigns/wrestler-reigns.component';

const routes: Routes = [
  {
    path: '',
    component: ChampionsTableComponent,
  },
  {
    path: 'wrestler/:id',
    component: WrestlerReignsComponent
  },
  {
    path: 'wrestler/:wrestlerId/championship/:championshipId',
    component: WrestlerChampionshipReignsComponent
  },
  {
    path: 'championship/:id',
    component: ChampionshipReignsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChampionsRoutingModule { }
 