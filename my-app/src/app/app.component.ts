import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from './window.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
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
  form: FormGroup;

  constructor(private router: Router, public db: AngularFireDatabase, private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window, private http: Http) {
    //this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
 /* onSubmit() {
   this.db.list('/items').push({ content: this.itemValue });
   this.itemValue = '';
 }  */

sendEmail() {

  let url = `https://us-central1-resturant-management-app.cloudfunctions.net/httpEmailSendGrid`
  let params: URLSearchParams = new URLSearchParams();
  //let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

  params.set('to', this.form.value.email);
  params.set('from', 'admin@rangolee.de');
  params.set('subject', 'Thanks for contacting Us!');
  params.set('content', 'Thanks for your message. We value your thoughts. \nBest Regards,\nRangolee Team');

  this.form.reset;

  return this.http.post(url, params)
    .toPromise()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    });

}

/* onSubmit() {
  const { name, email, message } = this.form.value;
  const date = Date();
  const html = `
    <div>From: ${name}</div>
    <div>Email: <a href="mailto:${email}">${email}</a></div>
    <div>Date: ${date}</div>
    <div>Message: ${message}</div>
  `;
  let formRequest = { name, email, message, date, html };
  this.db.list('/messages').push(formRequest);
  this.form.reset();
} */

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
