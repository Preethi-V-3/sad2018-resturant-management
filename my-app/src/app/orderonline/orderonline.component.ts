import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderonline',
  templateUrl: './orderonline.component.html',
  styleUrls: ['./orderonline.component.css']
})
export class OrderonlineComponent implements OnInit {

  sidenavList: Array<{ name: string, subMenu: any }>;
  subMenuItems: Array<{ name: string, items: any }>;
  selectedSubMenu: any;
  selectsubitems : any;

  constructor() {
    this.selectedSubMenu = "Soups"; //if no menu is selected by default display soup content

    this.sidenavList = [
      {
        name: "Menu",
        subMenu: [
          { name: "Soups" },
          { name: "Appetizers" },
          { name: "Rotis/Paratas" },
          { name: "Curries" },
          { name: "Desserts" }]
      },
      {
        name: "Drinks",
        subMenu: [
          { name: "Coffe/Tea" },
          { name: "Beer" },
          { name: "Wine" },
          { name: "Juices/Milk shakes" }]
      }
    ]

    this.subMenuItems = [
      {
        name: "Soups",
        items: [
          { name: "Corn Soup", price: 3.50, id:1 },
          { name: "Tomato Soup", price: 4.50, id:2 }
        ]
      },
      {
        name: "Appetizers",
        items: [
          { name: "Gobi manchurian", price: 6.50, id:3 },
          { name: "chicken pepper dry", price: 7.50, id:4 }
        ]
      },
      {
        name: "Rotis/Paratas",
        items: [
          { name: "Aloo parata", price: 4.00, id:5 },
          { name: "Tandoori roti", price: 1.50, id:6 }
        ]
      },
      {
        name: "Curries",
        items: [
          { name: "Bendi Masala", price: 9.50, id:7 },
          { name: "Chicken tikka", price: 8.50, id:8 }
        ]
      },
      {
        name: "Desserts",
        items: [
          { name: "Jamoon(2)", price: 3.00, id:9 },
          { name: "GudBud", price: 5.00 , id:10 }
        ]
      }
    ]
  }

  onSelect(submenuname: any): void {
    this.selectedSubMenu = submenuname;
    this.fetchSubMenuItems(this.subMenuItems, submenuname);
  }

  fetchSubMenuItems(arr, val) {
    this.selectsubitems = arr.filter(function(arrVal) {
      console.log(arrVal.name, val);
    return arrVal.name === val;
  });
  console.log(this.selectsubitems);
}

  ngOnInit() {
  }

}
