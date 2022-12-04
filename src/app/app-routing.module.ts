import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
  {
    path: 'recipes-page',
    loadChildren: () => import('./recipes-page/recipes-page.module').then( m => m.RecipesPagePageModule)
  },
  {
    path: 'my-recipes-page',
    loadChildren: () => import('./my-recipes-page/my-recipes-page.module').then( m => m.MyRecipesPagePageModule)
  },
  {
    path: 'recipe-details-page',
    loadChildren: () => import('./recipe-details-page/recipe-details-page.module').then( m => m.RecipeDetailsPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
