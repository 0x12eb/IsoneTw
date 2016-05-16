import {keys} from 'lodash/object';
import {forEach, groupBy} from 'lodash/collection';
import { MapCitiesService } from './map.cities.service';
import { MapLayersService } from './map.layers.service';
import { MapMarkersService } from './map.markers.service';
import { MapApiService } from './map.api.service';
import { MapDecorationsService } from './map.decorations.service';

export class MapFactory {
    constructor($log, $http) {
        'ngInject';

        this.mapCitiesService = new MapCitiesService();
        this.mapLayersService = new MapLayersService();
        this.mapMarkersService = new MapMarkersService();
        this.mapApiService = new MapApiService($log, $http);
        this.mapDecorationsService = new MapDecorationsService();
    }

    getMapConfig(cityName) {
        let selectedCityCoords = this.mapCitiesService.getCityCoordsByName(cityName);
        let layers = this.mapLayersService.getLayers();
        let markers = this.mapMarkersService.getRandomMarkerPairs(selectedCityCoords, keys(layers.overlays));
        let decorations = this.mapDecorationsService.getDecorationsByMarkers(groupBy(markers, 'layer'));
        let mapConfig = {
            center: {
                lat: selectedCityCoords.lat,
                lng: selectedCityCoords.lng,
                zoom: 12
            },
            layers,
            markers,
            decorations
        }
        return mapConfig;
    }

    changeMarkersIcon(markers, apiHost) {
        this.mapApiService.getCustomMarker(apiHost)
            .then(data => {
                forEach(markers, marker => {
                    marker.icon.html = data;
                })
            });
    }

    rotateMarkers(markers) {
        let markersByLayers = groupBy(markers, 'layer');
        forEach(markersByLayers, markerByLayer => {
            let dy = markerByLayer[1].lat - markerByLayer[0].lat
            let dx = markerByLayer[1].lng - markerByLayer[0].lng;
            let angle = Math.atan2(-dy, dx) * 180 / Math.PI + 90;
            if (angle < 0) {
                angle += 2 * Math.PI;
            }
            markerByLayer[0].iconAngle = angle;

            dy = markerByLayer[0].lat - markerByLayer[1].lat
            dx = markerByLayer[0].lng - markerByLayer[1].lng;
            angle = Math.atan2(-dy, dx) * 180 / Math.PI + 83;
            if (angle < 0) {
                angle += 2 * Math.PI;
            }
            markerByLayer[1].iconAngle = angle;
        });
    }
}