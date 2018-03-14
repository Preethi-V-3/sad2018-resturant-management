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
 
      constructor() {
  
  }

ngOnInit(): void {

}


  /* user: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.user = db.list('/user_details');
} */
}
