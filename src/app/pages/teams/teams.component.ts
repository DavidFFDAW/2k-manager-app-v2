import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { TeamsService } from 'src/app/services/teams.service';
import { TeamInterface } from 'src/app/shared/interfaces/common.interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogTeamsComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'average', 'actions' ];
  
  public teams: TeamInterface[] = [];
  public dataSource: MatTableDataSource<TeamInterface> = new MatTableDataSource();
  
  constructor(
    private teamService: TeamsService,
    private snackBar: SnackBarService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (resp) => {
        this.dataSource = new MatTableDataSource(resp.teams);       
        this.teams = resp.teams;
      },
      error: (err) => {
        this.snackBar.showSnackBar('Ha ocurrido un error: ' + err.message);
      }
    });
  }

  deleteTeamById(id: number) {
    this.teams = this.teams.filter(team => team.id !== id);
    this.dataSource = new MatTableDataSource(this.teams); 
  }

  askIfSureOfDeletion(id: number, name: string): void {
    const dialogReference = this.dialog.open(DialogTeamsComponent, {
      width: '250px',
      data: { id, name }
    });

    dialogReference.afterClosed().subscribe((result: number) => {
      if (result) {
        this.deleteTeamById(id);
      }    
    });
  }
}
