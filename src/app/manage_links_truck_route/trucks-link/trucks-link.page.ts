import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  
  IonSearchbar,
  IonList,
  IonItem,

  IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-trucks-link',
  standalone: true,
  imports: [IonButton, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonSearchbar,
    IonList,
    IonItem,
  
    IonContent,
  ],
  templateUrl: './trucks-link.page.html',
  styleUrls: ['./trucks-link.page.scss'],
})
export class TrucksLinkPage {
  public data = [
    'MH 12 jf 5463',
    'JK 13 fd 3453',
    'KN 15 hg 2512',
    'MH 16 hh 6515',
    'MH 17 jk 3236',
    'KS 11 jl 4256',
    'UK 13 js 7896',
  ];

  public cardTitles = [
    'Freight Truck' ,
    'Cargo Truck',
    'Transport Vehicle',
    'Lorry',
    'Delivery Truck',
    'Heavy Duty Truck',
    'Utility Truck',
  ];

  public activetrucks =[
    'Active',
    
  ]


  public results = [...this.data];

  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.results = this.data.filter((d) => d.toLowerCase().includes(query));
  }

  trackByFn(index: number, item: string) {
    return item;
  }
}
