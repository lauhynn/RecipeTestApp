import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPagePage } from './recipes-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPagePageRoutingModule {}
