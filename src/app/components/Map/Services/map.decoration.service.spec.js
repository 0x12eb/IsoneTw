describe('service map.decorations.service', () => {
    beforeEach(angular.mock.module('isoneTw'));

    it('should be registered', inject(mapDecorationsService => {
        expect(mapDecorationsService).not.toEqual(null);
    }));

    describe('getDecorationsByMarkers function', () => {
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
        let markersGroups = {
            "overlayName0": [
                {
                    "layer": "overlayName0",
                    "lat": 48.16134150543649,
                    "lng": 16.352629814352216,
                    "focus": false,
                    "icon": markerIcon
                },
                {
                    "layer": "overlayName0",
                    "lat": 48.16862342883516,
                    "lng": 16.368771210916734,
                    "focus": false,
                    "icon": markerIcon
                }
            ],
            "overlayName1": [
                {
                    "layer": "overlayName1",
                    "lat": 48.25526746644105,
                    "lng": 16.389511132234908,
                    "focus": false,
                    "icon": markerIcon
                },
                {
                    "layer": "overlayName1",
                    "lat": 48.16658108709525,
                    "lng": 16.403499098190498,
                    "focus": false,
                    "icon": markerIcon
                }
            ],
            "overlayName2": [
                {
                    "layer": "overlayName2",
                    "lat": 48.16798976347197,
                    "lng": 16.38777464647945,
                    "focus": false,
                    "icon": markerIcon
                },
                {
                    "layer": "overlayName2",
                    "lat": 48.18888751756534,
                    "lng": 16.352960148246574,
                    "focus": false,
                    "icon": markerIcon
                }
            ]
        }
        let expected = {
            "markers": {
                "coordinates": [
                    [
                        [
                            48.16134150543649,
                            16.352629814352216
                        ],
                        [
                            48.16862342883516,
                            16.368771210916734
                        ]
                    ],
                    [
                        [
                            48.25526746644105,
                            16.389511132234908
                        ],
                        [
                            48.16658108709525,
                            16.403499098190498
                        ]
                    ],
                    [
                        [
                            48.16798976347197,
                            16.38777464647945
                        ],
                        [
                            48.18888751756534,
                            16.352960148246574
                        ]
                    ]
                ],
                "patterns": [
                    {
                        "offset": 0,
                        "repeat": 11,
                        "symbol": jasmine.any(Object)
                    }
                ]
            }
        }

        it('should exist', inject(mapDecorationsService => {
            expect(mapDecorationsService.getDecorationsByMarkers).not.toBeNull();
        }));

        it('should return array of marker object', inject(mapDecorationsService => {
            const data = mapDecorationsService.getDecorationsByMarkers(markersGroups);
            expect(data).toEqual(jasmine.any(Object));
            expect(data).toEqual(expected);
        }));
    });
})