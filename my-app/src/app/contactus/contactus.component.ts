import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {

  form: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private http: Http) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  sendEmail() {

    let url = `https://us-central1-resturant-management-app.cloudfunctions.net/httpEmailSendGrid`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  
    params.set('to', this.form.value.email);
    params.set('from', 'admin@rangolee.de');
    params.set('subject', 'Thanks for contacting Us!');
    params.set('content', 'Thanks for your message. We value your thoughts. \nBest Regards,\nRangolee Team');
  
    this.sendContactMessage();

    return this.http.post(url, params)
      .toPromise()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
  
  }

  sendContactMessage() {
    const { name, email, message } = this.form.value;
    const subject = `Information Request from ${email}`;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Subject: ${subject}</div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, email, message, date, html };
    this.db.list('/contactformmessages').push(formRequest);
    this.form.reset();
  }
}
