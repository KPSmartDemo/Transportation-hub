import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Auth } from '@angular/fire/auth';
import { FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, UrlTree } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
// import { IonicModule } from '@ionic/angular/ionic-module';

@Component({
  selector: 'app-reset',
  standalone:true,
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule,FormsModule,ReactiveFormsModule],
})
export class ResetPage implements OnInit {

email: any;
password: any;
  
 
constructor(public router : Router, public authService : AutheticationService ){

  }

  ngOnInit() {
    
  }
async resetpassword(){
   this.authService.resetpassword(this.email,this.password).then(()=>{
    console.log('reset link sent')
    this.router.navigate(['/login'])
   }).catch((error)=>{
       console.log(error);
       
   })
   
}


}
  


  

 


