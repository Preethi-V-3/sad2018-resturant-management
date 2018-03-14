(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angularJSNavbarModule = undefined;

var _navbarRoute = require('./navbarRoute');

var _navbarRoute2 = _interopRequireDefault(_navbarRoute);

var _navbar = require('./navbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angularJSNavbarModule = exports.angularJSNavbarModule = 'angularJSNavbar';

window.angular.module(angularJSNavbarModule, []).service('navbarRouteService', _navbarRoute2.default).component('angularJsNavbar', _navbar.Navbar);

},{"./navbar":3,"./navbarRoute":4}],2:[function(require,module,exports){
module.exports = "<div class=\"angular-navbar\">\n  <!-- Desktop Horizontal Navbar -->\n  <div class=\"angular-navbar__desktop\"\n    ng-class=\"{'angular-navbar__desktop--always-show':\n      $ctrl.navbarRouteService.alwaysDesktop,\n      'angular-navbar__desktop--always-hide':\n        $ctrl.navbarRouteService.alwaysMobile}\">\n    <!-- Title -->\n    <div ng-if=\"$ctrl.navbarRouteService.title &&\n      !$ctrl.navbarRouteService.titleRoute\"\n      class=\"angular-navbar__desktop__title\">\n      {{$ctrl.navbarRouteService.title}}\n    </div>\n\n    <!-- Title Route -->\n    <div ng-if=\"$ctrl.navbarRouteService.titleRoute\"\n      class=\"angular-navbar__desktop__title--route\"\n      ng-click=\"$ctrl.goToState($ctrl.navbarRouteService.titleRoute)\">\n      {{$ctrl.navbarRouteService.title}}\n    </div>\n\n    <ul class=\"angular-navbar__desktop__list\">\n      <li ng-repeat=\"route in $ctrl.navbarRouteService.getRoutes()\"\n        ng-click=\"$ctrl.goToState(route)\"\n        class=\"angular-navbar__desktop__list__item\"\n        ng-class=\"{'angular-navbar__desktop__list__item--active': $ctrl.isActive(route)}\">\n        {{route.title}}\n      </li>\n    </ul>\n  </div>\n\n  <!-- Mobile Sidenav bar -->\n  <div class=\"angular-navbar__mobile\"\n  ng-class=\"{'angular-navbar__mobile--always-show':\n    $ctrl.navbarRouteService.alwaysMobile,\n    'angular-navbar__mobile--always-hide':\n      $ctrl.navbarRouteService.alwaysDesktop}\">\n\n    <!-- Hamburger menu button -->\n    <div class=\"angular-navbar__mobile__hamburger\"\n      ng-click=\"$ctrl.showNav = true\">\n      <div class=\"angular-navbar__mobile__hamburger__bar\">\n      </div>\n      <div class=\"angular-navbar__mobile__hamburger__bar\">\n      </div>\n      <div class=\"angular-navbar__mobile__hamburger__bar\">\n      </div>\n    </div>\n\n    <!-- Semi Transparent background -->\n    <div class=\"angular-navbar__mobile__shade\"\n      ng-class=\"{'angular-navbar__mobile__shade--nav-active': $ctrl.showNav}\"\n      ng-click=\"$ctrl.showNav = false\">\n    </div>\n\n    <!-- Sidenav that slides in -->\n    <div class=\"angular-navbar__mobile__sidenav\"\n      ng-class=\"{'angular-navbar__mobile__sidenav--nav-active': $ctrl.showNav}\">\n\n      <!-- Title -->\n      <div ng-if=\"$ctrl.navbarRouteService.title &&\n        !$ctrl.navbarRouteService.titleRoute\"\n        class=\"angular-navbar__mobile__sidenav__title\">\n        {{$ctrl.navbarRouteService.title}}\n      </div>\n\n      <!-- Title Route -->\n      <div ng-if=\"$ctrl.navbarRouteService.titleRoute\"\n        class=\"angular-navbar__mobile__sidenav__title--route\"\n        ng-click=\"$ctrl.goToState($ctrl.navbarRouteService.titleRoute)\">\n        {{$ctrl.navbarRouteService.title}}\n      </div>\n\n      <ul class=\"angular-navbar__mobile__sidenav__list\">\n        <li ng-repeat=\"route in $ctrl.navbarRouteService.getRoutes()\"\n          ng-click=\"$ctrl.goToState(route)\"\n          class=\"angular-navbar__mobile__sidenav__list__item\"\n          ng-class=\"{'angular-navbar__mobile__sidenav__list__item--active': $ctrl.isActive(route)}\">\n          {{route.title}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n";

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarController = function () {
  /** @ngInject */
  function NavbarController($log, $state, $location, navbarRouteService) {
    _classCallCheck(this, NavbarController);

    this.$log = $log;
    this.$state = $state;
    this.$location = $location;
    this.navbarRouteService = navbarRouteService;
    this.showNav = false;
  }

  // Check if a route is active


  _createClass(NavbarController, [{
    key: 'isActive',
    value: function isActive(route) {
      if (route.state) {
        return this.$state.includes(route.state);
      } else if (route.url) {
        return this.$location.path().includes(route.state);
      }
      this.$log.err('Angular Navbar: Route object must contain a \'state\' or \'url\' key');
      return false;
    }

    // Go to a State

  }, {
    key: 'goToState',
    value: function goToState(route) {
      if (route.state) {
        this.$state.go(route.state);
      } else if (route.url) {
        this.$location.path(route.url);
      }
      this.showNav = false;
    }
  }]);

  return NavbarController;
}();

// Return the component


var Navbar = exports.Navbar = {
  template: require('./navbar.html'),
  controller: NavbarController
};

},{"./navbar.html":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarRouteService = function () {
  function NavbarRouteService() {
    _classCallCheck(this, NavbarRouteService);

    this.title = '';
    this.titleRoute = {};
    this.routes = {};
    this.activeRoute = '';

    // Always show
    this.alwaysDesktop = false;
    this.alwaysMobile = false;
  }

  /**
  * Json should follow the following format
    [{
      title: "Home",
      state: "home",
      url: "/home"
    },
    {
      title: "About",
      state: "about"
      url: "/about"
    }]
  */


  _createClass(NavbarRouteService, [{
    key: 'setRoutes',
    value: function setRoutes(routes) {
      this.routes = routes;
    }
  }, {
    key: 'setTitle',
    value: function setTitle(title, route) {
      this.title = title;

      if (route) {
        this.titleRoute = route;
      }
    }
  }, {
    key: 'getRoutes',
    value: function getRoutes() {
      return this.routes;
    }
  }, {
    key: 'enableAlwaysDesktop',
    value: function enableAlwaysDesktop() {
      this.alwaysDesktop = true;
      this.alwaysMobile = false;
    }
  }, {
    key: 'enableAlwaysMobile',
    value: function enableAlwaysMobile() {
      this.alwaysDesktop = false;
      this.alwaysMobile = true;
    }
  }]);

  return NavbarRouteService;
}();

exports.default = NavbarRouteService;

},{}]},{},[1]);
