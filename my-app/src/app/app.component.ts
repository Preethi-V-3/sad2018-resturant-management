import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from './window.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  navIsFixed: boolean = false;
  //itemValue = '';
  //items: Observable<any[]>;

  constructor(private router: Router, public db: AngularFireDatabase,
    @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) {
    //this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {
  }

 /* onSubmit() {
   this.db.list('/items').push({ content: this.itemValue });
   this.itemValue = '';
 }  */

onlogin(){

  this.router.navigateByUrl('/loginpage');

}
//user: FirebaseListObservable<any[]>;

  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(e) {
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }
}
