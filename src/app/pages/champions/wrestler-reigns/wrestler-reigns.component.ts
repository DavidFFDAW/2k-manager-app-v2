import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from 'src/app/services/champion.service';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { CurrentChampions } from 'src/app/shared/interfaces/common.interfaces';

@Component({
  selector: 'app-wrestler-reigns',
  templateUrl: './wrestler-reigns.component.html',
  styleUrls: ['./wrestler-reigns.component.css']
})
export class WrestlerReignsComponent implements OnInit {
  public displayColumns = ['img', 'reigns', 'days', 'cta'];

  public wrestlerReigns: MatTableDataSource<CurrentChampions> = new MatTableDataSource();
  public wrestlerData: any = [];

  constructor(
    private championsService: ChampionService,
    private snackBar: SnackBarService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const wrestlerId = Number(this.router.snapshot.paramMap.get('id'));
    console.log(wrestlerId);

    this.championsService.getCustomWrestlerReigns(wrestlerId).subscribe({
      next: (resp) => {
        this.wrestlerData = resp.data;
        this.wrestlerReigns = resp.data.reigns;
        console.log(this.wrestlerData);
        console.log(this.wrestlerReigns);
      },
      error: (err) => this.snackBar.showSnackBar('Ha ocurrido un error: ' + err.message)
    });
  }

}
