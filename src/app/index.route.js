import { MapController } from '../app/components/Map/map.directive';
import { HomeController } from '../app/components/Home/home.directive';

export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  let root = {
    name: 'root',
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  }
  let home = {
    name: 'home',
    url: 'home',
    parent: 'root',
    templateUrl: 'app/components/Home/home.html',
    controller: HomeController,
    controllerAs: 'homeVm'
  }
  let map = {
    name: 'root.map',
    url: 'map/:normalizedCityName',
    parent: 'root',
    templateUrl: 'app/components/Map/map.html',
    controller: MapController,
    controllerAs: 'mapVm'
  }

  $stateProvider
    .state(root)
    .state(home)
    .state(map);

  $urlRouterProvider.otherwise('/home');
  $urlRouterProvider.when('/', '/home');
}
