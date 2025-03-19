import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-active-routes-link',
  standalone:true,
  imports:[CommonModule,IonicModule],
  templateUrl: './active-routes-link.page.html',
  styleUrls: ['./active-routes-link.page.scss'],
})
export class ActiveRoutesLinkPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
