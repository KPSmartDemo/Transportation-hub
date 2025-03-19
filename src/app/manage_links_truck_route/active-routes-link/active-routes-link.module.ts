import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveRoutesLinkPageRoutingModule } from './active-routes-link-routing.module';

import { ActiveRoutesLinkPage } from './active-routes-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveRoutesLinkPageRoutingModule,
    ActiveRoutesLinkPage
  ],
  
})
export class ActiveRoutesLinkPageModule {}
