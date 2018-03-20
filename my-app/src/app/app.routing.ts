import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { OrderonlineComponent } from './orderonline/orderonline.component'; //import orderonline components
import { ReservetableComponent } from './reservetable/reservetable.component'; //import reservetable components
import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import reservetable components
import { ContactusComponent } from './contactus/contactus.component'; //import orderonline components
import { MenuComponent } from './menu/menu.component'; //import reservetable components
import {LoginComponent} from './loginpage/loginpage.component';


const appRoutes: Routes = [
 // { path: 'orderonline', component: OrderonlineComponent },
{ path: 'home', component: HomeComponent },
{ path: 'loginpage', component: LoginComponent },
{ path: 'about', component: AboutComponent },
{ path: 'menu', component: MenuComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'reservetable', component: ReservetableComponent },
   { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);