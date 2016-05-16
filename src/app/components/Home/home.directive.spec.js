describe('directive home', function () {
    let element;

    beforeEach(angular.mock.module('isoneTw'));

    beforeEach(inject(($compile, $rootScope) => {
        element = angular.element(`
            <home></home>
        `);

        $compile(element)($rootScope.$new());
        $rootScope.$digest();
    }));

    it('should be compiled', () => {
        expect(element.html()).not.toEqual(null);
    });
});