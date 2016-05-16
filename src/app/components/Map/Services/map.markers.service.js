import {extend} from 'lodash/object'

export class MapMarkersService {
    constructor() {
        'ngInject';
    }

    getRandomMarkerPairs(coords, overlayKeys) {
        let markers = {};
        for (let i = 0; i < overlayKeys.length; i++) {
            for (let j = 0; j < 2; j++) {
                let markerName = `overlayKey${i}${j}`;
                let marker = {
                    [markerName]: {
                        layer: overlayKeys[i],
                        lat: this.getRandomCoords(coords.lat),
                        lng: this.getRandomCoords(coords.lng),
                        focus: false,
                        icon: {
                            type: 'div',
                            className : 'marker-svg',
                            iconSize: [40, 40],
                            iconAnchor: [12, 20]
                        }
                    }
                }
                extend(markers, marker);
            }
        }
        return markers;
    }

    getRandomCoords(coord) {
        let min = coord - 0.05;
        let max = coord + 0.05;
        return Math.random() * (max - min) + min;
    }
}