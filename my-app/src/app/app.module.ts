import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
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
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { ReservetableComponent } from './reservetable/reservetable.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WINDOW_PROVIDERS } from './window.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderonlineComponent,
    ReservetableComponent,
    AboutComponent,
    ContactusComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOUtsnB0yGW5dZWjayyiToVbAD7XVVBxk'
    }),
    TranslateModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // for authentication
        AngularFireDatabaseModule, // for database
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

