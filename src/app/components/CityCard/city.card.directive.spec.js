describe('directive city-card', function () {
    let element;
    let city;

    beforeEach(angular.mock.module('isoneTw'));

    beforeEach(inject(($compile, $rootScope) => {
        city = {
            country: 'Австрия',
            cityName: 'Вена',
            normalizedCityName: 'Vienna',
            coords: {
                lat: 48.21,
                lng: 16.38
            }
        };

        element = angular.element(`
            <city-card ng-include city="${city}"></city-card>
        `);

        $compile(element)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should be compiled', () => {
        expect(element.html()).not.toEqual(null);
    });
});