import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ItemDetails } from '../itemdetails';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuDetails: AngularFireList<any[]>;
  menu: Observable<any[]>;
  subMenuItems: Array<{ name: string, items: ItemDetails[] }>;

  constructor(private db: AngularFireDatabase) {

    this.menuDetails = db.list('menu_details');
    this.menu = this.menuDetails.snapshotChanges();
    this.menu.subscribe(data => {

      this.subMenuItems = [];
      data.forEach(snapshot => {
        var key = snapshot.key;
        var itemDetails = this.extractBody(snapshot.payload.val());
        this.subMenuItems.push({ name : key, items : itemDetails});
      });
      console.log(this.subMenuItems);
    });

   }

   extractBody(data) : ItemDetails[] { //converting object to array
    var items = [];
    var itemDetails = ItemDetails;

    for(let i in data) {
      itemDetails = data[i];
      items.push(itemDetails);
    }

    return items;
 }

  ngOnInit() {
  }

}
