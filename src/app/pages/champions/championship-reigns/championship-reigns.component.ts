import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { ChampionService } from 'src/app/services/champion.service';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { CurrentChampions } from 'src/app/shared/interfaces/common.interfaces';

@Component({
  selector: 'app-championship-reigns',
  templateUrl: './championship-reigns.component.html',
  styleUrls: ['./championship-reigns.component.css']
})
export class ChampionshipReignsComponent implements OnInit {

  public displayColumns = ['img', 'reigns', 'days', 'cta'];

  public championshipReigns: MatTableDataSource<CurrentChampions> = new MatTableDataSource();
  public championshipData: any = [];

  constructor(
    private championsService: ChampionService,
    private snackBar: SnackBarService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const championshipId = Number(this.router.snapshot.paramMap.get('id'));

    this.championsService.getCustomChampionshipReigns(championshipId).subscribe({
      next: (resp) => {
        this.championshipData = resp.data;
        this.championshipReigns = resp.data.reigns;
        console.log(resp.data);
      },
      error: (err) => this.snackBar.showSnackBar('Ha ocurrido un error: ' + err.message)
    });
  }

  changeFallbackImage(imageElement: Event): void {
    const image: HTMLImageElement = imageElement.target as HTMLImageElement;
    
    console.log('Error with '+ image.alt +' image');
    image.setAttribute('src',AppSettings.FALLBACK_NO_IMAGE);
  }

}
