import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatMenuModule,
   MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,
   MatCardModule, MatSidenavModule, MatTabsModule, MatListModule, MatExpansionModule , MatDatepickerModule,
   MatToolbarModule,
   MatSelectModule,
   MatNativeDateModule,
  } from '@angular/material';

import { routing }  from './app.routing';

import { AppComponent } from './app.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { ReservetableComponent } from './reservetable/reservetable.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderonlineComponent,
    ReservetableComponent,
    AboutComponent,
    ContactusComponent,
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
    MatCardModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
