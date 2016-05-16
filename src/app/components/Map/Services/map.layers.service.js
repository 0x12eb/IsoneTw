import {extend} from 'lodash/object'
import {BASE_LAYERS, MARKERS_PAIRS_COUNT} from '../map.constants';

export class MapLayersService {
    constructor() {
        'ngInject';
    }

    getLayers() {
        return extend({ baselayers: BASE_LAYERS }, { overlays: this.getOverlays() });
    }

    getOverlays() {
        let overlays = {};
        for (let i = 0; i < MARKERS_PAIRS_COUNT; i++) {
            let overlayName = `overlayName${i}`
            let overlay = {
                [overlayName]: {
                    type: 'group',
                    name: overlayName,
                    visible: true
                }
            }
            overlays = extend(overlays, overlay);
        }
        return overlays;
    }
}