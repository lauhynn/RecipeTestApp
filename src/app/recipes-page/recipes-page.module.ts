import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPagePageRoutingModule } from './recipes-page-routing.module';

import { RecipesPagePage } from './recipes-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPagePageRoutingModule
  ],
  declarations: [RecipesPagePage]
})
export class RecipesPagePageModule {}
