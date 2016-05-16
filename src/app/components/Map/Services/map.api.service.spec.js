import {MAP_CUSTOM_MARKER_API} from '../map.constants';

const SVG_RESPONSE = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                    <g>
                        <path opacity="0.4" fill="#FFFFFF" d="M23.8,35.3c1.1,0,2,0.4,2.8,0.9l9-19.2c-3.5-1.8-7.6-2.8-11.8-2.8c-4.2,0-8.3,1-11.8,2.8
                            l9,19.2C21.7,35.7,22.7,35.3,23.8,35.3z"/>
                        <path opacity="0.4" fill="none" stroke="#ED2224" stroke-miterlimit="10" d="M23.8,35.3c1.1,0,2,0.4,2.8,0.9l9-19.2
                            c-3.5-1.8-7.6-2.8-11.8-2.8c-4.2,0-8.3,1-11.8,2.8l9,19.2C21.7,35.7,22.7,35.3,23.8,35.3z"/>
                    </g>
                    </svg>
                    `;

describe('service mapApiService', () => {
    beforeEach(angular.mock.module('isoneTw'));

    it('should be registered', inject(mapApiService => {
        expect(mapApiService).not.toEqual(null);
    }));

    describe('apiHost variable', () => {
        it('should exist', inject(() => {
            expect(MAP_CUSTOM_MARKER_API).not.toEqual(null);
        }));
    });

    describe('getCustomMarker function', () => {
        it('should exist', inject(mapApiService => {
            expect(mapApiService.getCustomMarker).not.toEqual(null);
        }));

        it('should return data', inject((mapApiService, $httpBackend) => {
            $httpBackend.when('GET', MAP_CUSTOM_MARKER_API).respond(200, SVG_RESPONSE);
            var data;
            mapApiService.getCustomMarker(MAP_CUSTOM_MARKER_API).then(function (fetchedData) {
                data = fetchedData;
            });
            $httpBackend.flush();
            expect(data).toEqual(jasmine.any(String));
        }));

        it('should log a error', inject((mapApiService, $httpBackend, $log) => {
            $httpBackend.when('GET', MAP_CUSTOM_MARKER_API).respond(500);
            mapApiService.getCustomMarker(MAP_CUSTOM_MARKER_API);
            $httpBackend.flush();
            expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
        }));
    });
});