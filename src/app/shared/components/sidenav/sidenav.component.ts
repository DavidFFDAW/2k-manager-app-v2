import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SidenavRouter, SidenavRouterType } from './sidenav.routes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() public dark: any;
  public sidenavRoutes: SidenavRouterType[];
  public themeIcon: string = 'light_mode';

  ngOnInit(): void {
    this.setIconTheme(); 
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    this.sidenavRoutes = SidenavRouter;
  }

  setIconTheme() {
    this.themeIcon = this.dark ? 'light_mode' : 'dark_mode';
  }

  changeTheme() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark-theme', this.dark);
    this.setIconTheme();
  }

}
