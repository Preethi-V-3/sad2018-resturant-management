import NavbarRouteService from './navbarRoute';
import { Navbar } from './navbar';

export const angularJSNavbarModule = 'angularJSNavbar';

window.angular
  .module(angularJSNavbarModule, [])
  .service('navbarRouteService', NavbarRouteService)
  .component('angularJsNavbar', Navbar);
