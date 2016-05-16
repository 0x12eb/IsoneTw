describe('service map.markers.service', () => {
    beforeEach(angular.mock.module('isoneTw'));

    it('should be registered', inject(mapMarkersService => {
        expect(mapMarkersService).not.toEqual(null);
    }));

    describe('getRandomMarkerPairs function', () => {
        let coords = {
            lat: 48.21,
            lng: 16.38
        };
        let overlayKeys = [
            "overlayName0",
            "overlayName1",
            "overlayName2"
        ];

        let markerIcon = {
            "type": "div",
            "className": "marker-svg",
            "iconSize": [
                40,
                40
            ],
            "iconAnchor": [
                12,
                20
            ]
        };
        let expected = {
            "overlayKey00": {
                "layer": "overlayName0",
                "lat": jasmine.any(Number),
                "lng": jasmine.any(Number),
                "focus": false,
                "icon": markerIcon
            },
            "overlayKey01": {
                "layer": "overlayName0",
                "lat": jasmine.any(Number),
                "lng": jasmine.any(Number),
                "focus": false,
                "icon": markerIcon
            },
            "overlayKey10": {
                "layer": "overlayName1",
                "lat": jasmine.any(Number),
                "lng": jasmine.any(Number),
                "focus": false,
                "icon": markerIcon
            },
            "overlayKey11": {
                "layer": "overlayName1",
                "lat": jasmine.any(Number),
                "lng": jasmine.any(Number),
                "focus": false,
                "icon": markerIcon
            },
            "overlayKey20": {
                "layer": "overlayName2",
                "lat": jasmine.any(Number),
                "lng": jasmine.any(Number),
                "focus": false,
                "icon": markerIcon
            },
            "overlayKey21": {
                "layer": "overlayName2",
                "lat": jasmine.any(Number),
                "lng": jasmine.any(Number),
                "focus": false,
                "icon": markerIcon
            }
        }

        it('should exist', inject(mapMarkersService => {
            expect(mapMarkersService.getRandomMarkerPairs).not.toBeNull();
        }));

        it('should return array of marker object', inject(mapMarkersService => {
            const data = mapMarkersService.getRandomMarkerPairs(coords, overlayKeys);
            expect(data).toEqual(jasmine.any(Object));
            expect(data).toEqual(expected);
        }));
    });

    describe('getRandomCoords function', () => {
        let coord = 48.21;

        it('should exist', inject(mapMarkersService => {
            expect(mapMarkersService.getRandomCoords).not.toBeNull();
        }));

        it('should return random coord by exist coord', inject(mapMarkersService => {
            const data = mapMarkersService.getRandomCoords(coord);
            expect(data).toEqual(jasmine.any(Number));
            expect(data < 48.21 + 0.05 && data > 48.21 - 0.05).toBeTruthy();
        }));
    });
});