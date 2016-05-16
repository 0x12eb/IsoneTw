import {find} from 'lodash/collection'

export class MapCitiesService {
    constructor() {
        'ngInject';

        this.cities = [
            {
                country: 'Австрия',
                cityName: 'Вена',
                normalizedCityName: 'Vienna',
                coords: {
                    lat: 48.21,
                    lng: 16.38
                }
            },
            {
                country: 'Чехия',
                cityName: 'Прага',
                normalizedCityName: 'Prague',
                coords: {
                    lat: 50.08,
                    lng: 14.41
                }
            }
        ];
    }

    getCities() {
        return this.cities;
    }

    getCityCoordsByName(name) {
        let city = find(this.cities,
            c => c.normalizedCityName === name);
        if (city) {
            return city.coords;
        }
    }
}
