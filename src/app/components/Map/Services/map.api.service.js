export class MapApiService {
    constructor($log, $http) {
        'ngInject';

        this.$log = $log;
        this.$http = $http;
    }

    getCustomMarker(apiHost) {
        return this.$http.get(apiHost)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.$log.error('XHR Failed for getCustomMarker.\n' + angular.toJson(error.data, true));
            });
    }
}