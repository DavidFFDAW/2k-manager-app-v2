import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipReignsComponent } from './championship-reigns.component';

describe('ChampionshipReignsComponent', () => {
  let component: ChampionshipReignsComponent;
  let fixture: ComponentFixture<ChampionshipReignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipReignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipReignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
