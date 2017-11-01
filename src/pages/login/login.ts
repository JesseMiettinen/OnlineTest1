//Jesse Miettinen 1601555

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

 

//Navigates user to About if succesfully authenticated login
 async login(user : User) {
   try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    
       if(result) {     
    this.navCtrl.push('MenuPage')
    }
  }
 catch (e) {
    
    this.navCtrl.setRoot('LoginPage')
    
    
  }
  
  }

  
  


//Navigates user to register page
  register() {
    this.navCtrl.push('RegisterPage')
  }
  
  }


