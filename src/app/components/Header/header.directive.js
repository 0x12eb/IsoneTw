export function HeaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/Header/header.html',
    controller: HeaderController,
    controllerAs: 'headerVm'
  };

  return directive;
}

class HeaderController {
  constructor() {
    'ngInject';
  }
}