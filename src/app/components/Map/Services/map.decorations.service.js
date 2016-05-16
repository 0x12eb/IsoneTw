import {forEach} from 'lodash/collection';

export class MapDecorationsService {
    constructor() {
        'ngInject';
    }
    
    /*eslint-disable no-undef */
    getDecorationsByMarkers(markersGroups) {
        let decorations = {
            markers: {
                coordinates: [],
                patterns: [
                    {
                        offset: 7,
                        repeat: 20,
                        symbol: L.Symbol.dash({ pixelSize: 4, pathOptions: { color: '#0000FF', weight: 5 } })
                    }
                ]
            }
        }
        forEach(markersGroups, markerGroup => {
            let p1 = [markerGroup[0].lat, markerGroup[0].lng];
            let p2 = [markerGroup[1].lat, markerGroup[1].lng];
            decorations.markers.coordinates.push([p1, p2]);
        })
        return decorations;
    }
    /*eslint-enable no-undef */
}