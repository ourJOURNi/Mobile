import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { CustomComponentsModule } from "../../../components/custom-component.module";

import { FavoritesPage } from './favorites.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    CustomComponentsModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
