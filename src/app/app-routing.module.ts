import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'commits',
    loadChildren: () => import('./pages/commits/commits.module').then( m => m.CommitsPageModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./pages/authors/authors.module').then( m => m.AuthorsPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/tags/tags.module').then( m => m.TagsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
