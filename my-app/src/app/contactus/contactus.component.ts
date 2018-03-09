import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'contactus.component.html',
  styleUrls: ['contactus.component.css'],
})
export class ContactusComponent {
  title: 'app';
  lat: number = 50.1109;
  lng: number = 8.6821;
}