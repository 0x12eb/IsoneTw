export function LeafletHeightDirective() {
    'ngInject';

    let directive = {
        restrict: 'A',
        controller: LeafletHeightController,
        link: linkFunc,
    };

    return directive;
}

function linkFunc(scope, el, attr) {

    let windowHeight = 100;
    $(window).resize(() => {
        windowHeight = window.innerHeight - 64;
    });
    attr.height = `${windowHeight}px`;
}

export class LeafletHeightController {
    constructor() {
        'ngInject';
    }
}