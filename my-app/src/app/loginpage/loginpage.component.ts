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

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        //this.router.navigateByUrl('/home');
      }
    });
    

    //var menu = db.database.ref('menu_details');
    //menu.on('value', this.gotData, this.errData);

  }

 
  /* gotData(data) {
    var menuDetails = data.val();
    var subMenuHeadings = Object.keys(menuDetails);

    for (var i = 0; i < subMenuHeadings.length; i++) {

      var subMenu = firebase.database().ref('menu_details/' + subMenuHeadings[i]).on('value', function (itemsnapshot) {

        var subMenuDetails = itemsnapshot.val();
        var itemIds = Object.keys(subMenuDetails);

        for (var i = 0; i < itemIds.length; i++) {
          var key = itemIds[i];
          var itemDetails = subMenuDetails[key].item_name + " : " + subMenuDetails[key].item_price;
          console.log("itemDetails", itemDetails);
        }
      });
    }
  }
  errData(err) {
    console.log(err);
  } */
  
  loginWithEmail() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(value => {
      console.log("User Login Successful");
      this.router.navigate(['/home']);

    }).catch(err => {
      console.log('Something went wrong:', err.message);
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
          console.log('Something went wrong:', err.message);
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
        console.log('Something went wrong:', err.message);
      });
    this.email = this.password = '';
  }
}
