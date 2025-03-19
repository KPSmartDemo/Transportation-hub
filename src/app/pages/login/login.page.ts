import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { IonicModule, LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
// import { IonicModule } from '@ionic/angular/ionic-module';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule,ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  loginform!: FormGroup;
  // regform: any;
  

  constructor(
    public formbuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private authService: AutheticationService ,// Ensure correct spelling
    public router :Router
  ) {}

  ngOnInit() {
    // this.formbuilder.group
    this.loginform = this.formbuilder.group({
      // fullname: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}$/)
      ]]
    });
    



    }
    get errorControl(){
      return this.loginform?.controls
     }
     async loginUser() {
      const loading = await this.loadingCtrl.create();
      await loading.present(); 
    
      if (this.loginform?.valid) {
        try {
          const user = await this.authService.loginUser(
            this.loginform.value.email,  
            this.loginform.value.password
          );
          if (user) {
            loading.dismiss();
            this.router.navigate(['/menu']);
          } else {
            console.log('Provide valid information');
            loading.dismiss();
          }
        } catch (error) {
          console.error('Signup error:', error);
          loading.dismiss();
        }
      } else {
        console.log('Invalid form data');
        loading.dismiss();
        // HtmlParser.toString()
      }
    }}
    
