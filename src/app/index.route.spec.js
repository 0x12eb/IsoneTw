describe('index route', function () {
    let state;
    let rootScope;

    beforeEach(angular.mock.module('isoneTw'));

    beforeEach(inject(($state, $rootScope) => {
        state = $state;
        rootScope = $rootScope;
    }));

    it("should change to the root state", function () {
        rootScope.$apply(function () {
            state.go("root");
        });
        expect(state.current.name).toEqual("root");
    });

    it("should change to the home state", function () {
        rootScope.$apply(function () {
            state.go("home");
        });
        expect(state.current.name).toEqual("home");
    });

    it("should change to the root.map state", function () {
        rootScope.$apply(function () {
            state.go("root.map");
        });
        expect(state.current.name).toEqual("root.map");
    });

    it("should change to the root.map state with params", function () {
        let cityNameExample = 'Moscow';
        rootScope.$apply(function () {
            state.go("root.map", { normalizedCityName: cityNameExample });
        });
        expect(state.params.normalizedCityName).toEqual(cityNameExample);
    });
});