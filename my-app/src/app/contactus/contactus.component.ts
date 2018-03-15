import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  lat: number = 50.1109;
  lng: number = 8.6821;

  // form: FormGroup;
  constructor(/* private fb: FormBuilder,  */private db: AngularFireDatabase) {
  }

  ngOnInit() {
    // this.createForm();
  }

  /* createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  } */
  sendFunction(name, email, message) {

    console.log(name, email, message);
    // const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, email, message, date, html };
    this.db.list('/messages').push(formRequest);
  }
}

