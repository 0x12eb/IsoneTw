import {BASE_LAYERS} from '../map.constants';

describe('service map.layers.service', () => {
    beforeEach(angular.mock.module('isoneTw'));

    it('should be registered', inject(mapLayersService => {
        expect(mapLayersService).not.toEqual(null);
    }));

    describe('getLayers function', () => {
        let expected = {
            "baselayers": BASE_LAYERS,
            "overlays": {
                "overlayName0": {
                    "type": "group",
                    "name": "overlayName0",
                    "visible": true
                },
                "overlayName1": {
                    "type": "group",
                    "name": "overlayName1",
                    "visible": true
                },
                "overlayName2": {
                    "type": "group",
                    "name": "overlayName2",
                    "visible": true
                }
            }
        }

        it('should exist', inject(mapLayersService => {
            expect(mapLayersService.getLayers).not.toBeNull();
        }));

        it('should return array of layer object', inject(mapLayersService => {
            const data = mapLayersService.getLayers();
            expect(data).toEqual(jasmine.any(Object));
            expect(data).toEqual(expected);
        }));
    });
})