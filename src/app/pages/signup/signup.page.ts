import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule],
})
export class SignupPage implements OnInit {
  regform!: FormGroup;
  constructor(
    public formbuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private authService: AutheticationService,
    public router: Router
  ) {}

  ngOnInit() {
    // this.formbuilder.group
    this.regform = this.formbuilder.group({
      fullname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`]).{8,}$/
          ),
        ],
      ],
    });
  }

  get errorControl() {
    return this.regform?.controls;
  }
  async signup() {
    const loading = await this.loadingCtrl.create();
    await loading.present(); 
  
    if (this.regform?.valid) {
      try {
        const user = await this.authService.registerUser(
          this.regform.value.email,  
          this.regform.value.password
        );
        if (user) {
          loading.dismiss();
          this.router.navigate(['/login']);
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
    }
  }}
  