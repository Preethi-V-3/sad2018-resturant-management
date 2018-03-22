import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.css']
})
export class ReservetableComponent implements OnInit {


  //date: any;
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: Http, private db: AngularFireDatabase) {
    //this.date = new FormControl(new Date());
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      date: ['', Validators.required],
      person: ['', Validators.required],
      time: ['', Validators.required],
    });
  }
  sendEmail() {

    let url = `https://us-central1-resturant-management-app.cloudfunctions.net/httpEmailSendGrid`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', this.form.value.email);
    params.set('from', 'admin@rangolee.de');
    params.set('subject', 'Thanks for Reserving your appointment with Us!');
    params.set('content', 'Thanks for booking your table.\n Your table is confirmed. \nBest Regards,\nRangolee Team');

    this.sendReserveTableMessage();

    return this.http.post(url, params)
      .toPromise()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });

  }

  sendReserveTableMessage() {
    const { name, email, message } = this.form.value;
    const subject = `Table booking Request from  ${email}`;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Subject: ${subject}</div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, email, message, date, html };
    this.db.list('/reservetablemessages').push(formRequest);
    this.form.reset();
  }
}