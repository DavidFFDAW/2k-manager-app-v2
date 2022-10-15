import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerReignsComponent } from './wrestler-reigns.component';

describe('WrestlerReignsComponent', () => {
  let component: WrestlerReignsComponent;
  let fixture: ComponentFixture<WrestlerReignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrestlerReignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrestlerReignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
