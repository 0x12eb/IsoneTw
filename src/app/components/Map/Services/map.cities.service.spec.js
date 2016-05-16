describe('service map.cities.service', () => {
    beforeEach(angular.mock.module('isoneTw'));

    it('should be registered', inject(mapCitiesService => {
        expect(mapCitiesService).not.toEqual(null);
    }));

    describe('getCities function', () => {
        it('should exist', inject(mapCitiesService => {
            expect(mapCitiesService.getCities).not.toBeNull();
        }));

        it('should return array of object', inject(mapCitiesService => {
            const data = mapCitiesService.getCities();
            expect(data).toEqual(jasmine.any(Array));
            expect(data[0]).toEqual(jasmine.any(Object));
            expect(data.length > 1).toBeTruthy();
        }));
    });

    describe('getCityCoordsByName function', () => {
        let normalizedCityName = 'Prague';

        it('should exist', inject(mapCitiesService => {
            expect(mapCitiesService.getCityCoordsByName).not.toBeNull();
        }));

        it('should return object', inject(mapCitiesService => {
            const object = mapCitiesService.getCityCoordsByName(normalizedCityName);
            expect(object).not.toBeNull();
            expect(object).toEqual(jasmine.any(Object));
        }));
    });
});
