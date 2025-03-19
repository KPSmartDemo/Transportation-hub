import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    LandingPage,
    RouterModule
    
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LandingPageModule {}
