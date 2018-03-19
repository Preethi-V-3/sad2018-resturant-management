import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.css']
})
export class ReservetableComponent implements OnInit {

  constructor() {
    this.date = new FormControl(new Date());
   }

  ngOnInit() {
  }
  date:any;
  minDate = new Date();
}
