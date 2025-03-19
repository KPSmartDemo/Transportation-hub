import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule,   } from '@ionic/angular';
@Component({
  selector: 'app-landing',
  standalone :true,
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule],
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
