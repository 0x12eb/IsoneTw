import {MAP_CUSTOM_MARKER_API} from './map.constants';

export function MapDirective() {
  'ngInject';

  let directive = { 
    restrict: 'E',
    templateUrl: 'app/components/Map/map.html',
    controller: MapController,
    controllerAs: 'mapVm'
  };

  return directive;
}

export class MapController {
  constructor($scope, $stateParams, mapFactory) {
    'ngInject';

    this.$scope = $scope;
    this.mapConfig = {};
    this.mapFactory = mapFactory;
    this.selectedCityName = $stateParams.normalizedCityName;

    this.activate();
  }

  activate() {
    this.mapConfig = this.mapFactory.getMapConfig(this.selectedCityName);
    this.mapFactory.changeMarkersIcon(this.mapConfig.markers, MAP_CUSTOM_MARKER_API);
    this.mapFactory.rotateMarkers(this.mapConfig.markers);
  }
}