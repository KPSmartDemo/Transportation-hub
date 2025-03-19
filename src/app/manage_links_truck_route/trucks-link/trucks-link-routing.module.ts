import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrucksLinkPage } from './trucks-link.page';

const routes: Routes = [
  {
    path: '',
    component: TrucksLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrucksLinkPageRoutingModule {}
