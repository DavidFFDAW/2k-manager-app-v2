import { Swiper } from 'swiper';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';
import { SnackBarService } from 'src/app/services/snack.bar.service';
import { CurrentChampions } from 'src/app/shared/interfaces/common.interfaces';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  // templateUrl: './champions.table.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit, AfterViewInit {

  public isInterval: boolean = true;
  public currentChampions: CurrentChampions[] = [];
  private interval: any;
  private swiper: any;
  
  constructor(
    private championsService: ChampionService,
    private snackBar: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.championsService.getChampions().subscribe({
      next: (resp) => {        
        console.log(resp);
        
        this.currentChampions = resp.data;
      },
      error: (err) => {
        this.snackBar.showSnackBar('Ha ocurrido un error: ' + err.message);
      }
    });
  }

  isLastSlide() {
    return this.swiper.isEnd;
  }

  setUpInterval() {
    this.isInterval = true;
    this.interval = setInterval(() => {
      if (this.isLastSlide()) {
        clearInterval(this.interval);
      }
      this.swiper.slideNext();
    }, 4000);
  }

  ngAfterViewInit(): void {    
    this.swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      speed: 800,
      spaceBetween: 30,
      centeredSlides: true,      
    });
    this.setUpInterval();
  }

  nextSlide() {
    this.swiper.slideNext();
  }

  lastSlide() {
    this.swiper.slideTo(this.swiper.slides.length - 1);
  }

  modifySwiper() {
    if (this.isInterval) {
      clearInterval(this.interval);
      this.isInterval = false;
    } else {
      this.setUpInterval();
    }
  }

}
