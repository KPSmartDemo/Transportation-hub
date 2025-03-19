import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';

import { TrucksLinkPageRoutingModule } from './trucks-link-routing.module';

import { TrucksLinkPage } from './trucks-link.page';

@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrucksLinkPageRoutingModule,TrucksLinkPage,

  ],

})
export class TrucksLinkPageModule {}
