export function CityCardDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/CityCard/city.card.html',
        scope: {
            city: '='
        },
        controller: CityCardController,
        controllerAs: 'cityCardVm',
        bindToController: true
    };

    return directive;
}

export class CityCardController {
    constructor() {
        'ngInject';
    }
}
