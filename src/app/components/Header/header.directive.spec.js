describe('directive header-app', function () {
    let element;

    beforeEach(angular.mock.module('isoneTw'));

    beforeEach(inject(($compile, $rootScope) => {

        element = angular.element(`
            <app-header></app-header>
        `);

        $compile(element)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should be compiled', () => {
        expect(element.html()).not.toEqual(null);
    });
});