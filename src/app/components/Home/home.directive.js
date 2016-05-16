export function HomeDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/Home/home.html',
        controller: HomeController,
        bindToController: true
    };

    return directive;
}

export class HomeController {
    constructor(mapCitiesService) {
        'ngInject';

        this.cities = [];

        this.activate(mapCitiesService);
    }

    activate(mapCitiesService) {
        this.cities = mapCitiesService.getCities();
    }
}