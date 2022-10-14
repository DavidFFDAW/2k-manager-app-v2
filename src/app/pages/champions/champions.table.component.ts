import { Swiper } from 'swiper';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { CurrentChampions } from 'src/app/shared/interfaces/common.interfaces';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.table.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsTableComponent implements OnInit {
  displayedColumns: string[] = [ 'img', 'name', 'reigns', 'days', 'cta' ];
  
  public championshipReigns: CurrentChampions[] = [];
  public singlesChampions: MatTableDataSource<CurrentChampions> = new MatTableDataSource();
  public tagTeamChampions: MatTableDataSource<CurrentChampions> = new MatTableDataSource();
  
  constructor(
    private championsService: ChampionService,
    private snackBar: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.championsService.getChampions().subscribe({
      next: (resp) => {        
        console.log(resp);
        
        this.championshipReigns = [ ...resp.reigns.currentSingles, ...resp.reigns.currentTagTeams ];
        this.singlesChampions = resp.reigns.currentSingles;
        this.tagTeamChampions = resp.reigns.currentTagTeams;        
      },
      error: (err) => {
        this.snackBar.showSnackBar('Ha ocurrido un error: ' + err.message);
      }
    });
  }

}
