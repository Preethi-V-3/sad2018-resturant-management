import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html'
})
export class LoginComponent implements OnInit {

    email: string;
  password: string;

    user: Observable<firebase.User>;
        
    constructor(public afAuth: AngularFireAuth, private router : Router) {
        this.user = afAuth.authState;
        this.afAuth.authState.subscribe(auth => { 
            if(auth) {
              //this.router.navigateByUrl('/home');
            }
          });
    }
    loginWithEmail() {
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(value => {
            console.log("User Login Successful");
            this.router.navigate(['/home']);
		
		}).catch(err => {
            console.log('Something went wrong:',err.message);
        });
        this.email = this.password = '';
    }
    
    loginGoogle() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
            (success) => {
                console.log('User Successfully Created', success);
            this.router.navigate(['/home']);
          }).catch(
            (err) => {
                console.log('Something went wrong:',err.message);
          })
      }
    
    logout() {
      this.afAuth.auth.signOut();
    }
  ngOnInit() {
  }

  signup() {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(value => {
        console.log('User Successfully Created', value);
        this.router.navigateByUrl('/home');
        
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
      this.email = this.password = '';
  }
}
