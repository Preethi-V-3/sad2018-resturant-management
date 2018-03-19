import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSidenavModule,
  MatTabsModule,
  MatListModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatSelectModule,
  MatNativeDateModule,
} from '@angular/material';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { ReservetableComponent } from './reservetable/reservetable.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './loginpage/loginpage.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderonlineComponent,
    ReservetableComponent,
    AboutComponent,
    ContactusComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSelectModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
