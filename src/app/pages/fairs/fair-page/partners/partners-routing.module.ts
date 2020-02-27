import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnersPage } from './partners.page';

const routes: Routes = [
  {
    path: '',
    component: PartnersPage
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then( m => m.SurveyPageModule)
  },
  {
    path: 'faq/:id',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnersPageRoutingModule {}