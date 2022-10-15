import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerChampionshipReignsComponent } from './wrestler-championship-reigns.component';

describe('WrestlerChampionshipReignsComponent', () => {
  let component: WrestlerChampionshipReignsComponent;
  let fixture: ComponentFixture<WrestlerChampionshipReignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrestlerChampionshipReignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrestlerChampionshipReignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
