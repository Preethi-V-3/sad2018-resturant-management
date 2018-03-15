import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.css']
})
export class ReservetableComponent implements OnInit {

  date:any;
  minDate = new Date();

  constructor() {
    this.date = new FormControl(new Date());
   }

  ngOnInit() {
  }
}
