import { Swiper } from 'swiper';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { CurrentChampions } from 'src/app/shared/interfaces/common.interfaces';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit, AfterViewInit {

  public currentChampions: CurrentChampions[] = [];
  private swiper: any;
  
  constructor(
    private championsService: ChampionService,
    private snackBar: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.championsService.getChampions().subscribe({
      next: (resp) => {        
        this.currentChampions = resp.data;
      },
      error: (err) => {
        this.snackBar.showSnackBar('Ha ocurrido un error: ' + err.message);
      }
    });
  }


  ngAfterViewInit(): void {    
    this.swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      speed: 800,
      spaceBetween: 30,
      centeredSlides: true,      
    });

    setInterval(() => {
      this.swiper.slideNext();
    }, 4000);
  }

}
