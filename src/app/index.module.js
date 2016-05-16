import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { HeaderDirective } from '../app/components/Header/header.directive';
import { HomeDirective } from '../app/components/Home/home.directive';
import { MapDirective } from '../app/components/Map/map.directive';
import { CityCardDirective } from '../app/components/CityCard/city.card.directive';
import { MapCitiesService } from '../app/components/Map/Services/map.cities.service';
import { MapFactory } from '../app/components/Map/Services/map.factory';
import { MapApiService } from '../app/components/Map/Services/map.api.service';
import { MapMarkersService } from '../app/components/Map/Services/map.markers.service';
import { MapLayersService } from '../app/components/Map/Services/map.layers.service';
import { MapDecorationsService } from '../app/components/Map/Services/map.decorations.service';

let modules = [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'toastr',
  'nemLogging',
  'ui-leaflet'
]

angular.module('isoneTw', modules)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .service('mapCitiesService', MapCitiesService)
  .service('mapFactory', MapFactory)
  .service('mapApiService', MapApiService)
  .service('mapMarkersService', MapMarkersService)
  .service('mapLayersService', MapLayersService)
  .service('mapDecorationsService', MapDecorationsService)
  .directive('appHeader', HeaderDirective)
  .directive('home', HomeDirective)
  .directive('map', MapDirective)
  .directive('cityCard', CityCardDirective);
