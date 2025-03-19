import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-menu',
  standalone:true,
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule],
})
export class MenuPage {
  // signout: any;
  
    constructor(public  authService : AutheticationService , public router :Router) {
    }
  
  async signout(){
  this.authService.signout().then(()=>{
      this.router.navigate(['/login'])
  })
  }
  
  }
