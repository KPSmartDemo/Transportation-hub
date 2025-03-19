import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveRoutesLinkPage } from './active-routes-link.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveRoutesLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveRoutesLinkPageRoutingModule {}
