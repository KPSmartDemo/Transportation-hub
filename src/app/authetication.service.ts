import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor(public ngFireAuth : AngularFireAuth) { }
      
  
    async registerUser(Email :string , Password:string ){
      return await this.ngFireAuth.createUserWithEmailAndPassword(Email,Password)
    }
    async loginUser(Email:string,Password:string){
     return await this.ngFireAuth.signInWithEmailAndPassword(Email,Password)
    }
    async resetpassword(Email: string, password: any){
      return await this.ngFireAuth.sendPasswordResetEmail(Email)
    }
    async signout(){
      return this.ngFireAuth.signOut
    }
    async getProfile(){
      return this.ngFireAuth.currentUser
    }

}
