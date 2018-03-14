(function() {
  const app = angular.module('ghpages', ['angularJSNavbar', 'ui.router']);
  app.config($stateProvider => {
    const homeState = {
      name: 'home',
      url: '/',
      templateUrl: './README.html'
    }

    const testState = {
      name: 'test',
      url: '/test',
      template: '<h3>I am the test route!</h3>'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(testState);
  });
  app.run((navbarRouteService, $state) => {
    // navbarRouteService.enableAlwaysDesktop();
    navbarRouteService.setTitle('angular-js-navbar', {
      title: 'Home',
      state: 'home',
      url: '/'
    });
    navbarRouteService.setRoutes([{
      title: 'Home',
      state: 'home',
      url: '/'
    },
    {
      title: 'Test',
      state: 'test',
      url: '/test'
    }]);


    // Go to the home state
    $state.go('home');
  });
  app.controller('main', ($scope) => {
    $scope.instructions = 'NOTE: Use the navigation bar above to try angularjs-responsive-navbar. Also, resize the window to see responsiveness';
  });
})();
