import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  navLinks : Array<{label: string, path: string}>;
  // welcome : string;
  
    constructor(private router: Router) {
//         this.welcome = "Display List using ngFor in Angular"

this.navLinks = [
  {label: "Home", path: "/home"}, 
  {label: "About", path: "/about"}, 
  {label: "Menu", path: "/menu"}, 
  {label: "Reserve Table", path: "/reservetable"}, 
  {label: "Order Online", path: "/orderonline"}, 
  {label: "Contact Us", path: "/contactus"}];
    }

ngOnInit(): void {

}

  /* user: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.user = db.list('/user_details');
} */
}
