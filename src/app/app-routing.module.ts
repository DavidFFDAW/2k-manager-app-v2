import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NotTokenizedRouteGuard } from './shared/guards/not-tokenized-route.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule),
  },
  { 
    path: 'champions',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./pages/champions/champions.module').then(m => m.ChampionsModule), 
  },
  {
    path: '404',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  { 
    path: 'auth',
    canActivate: [ NotTokenizedRouteGuard ],
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.LoginModule), 
  },
  { 
    path: '**', 
    redirectTo: '404',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
