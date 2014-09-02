define([
    'angular',
    'app/gerencia/controllers/SideBarController',
    'app/gerencia/controllers/MarmitaController',
    'app/gerencia/services/MarmitaFactory',
    'angular-resource'
], function (angular, SideBarController, MarmitaController, MarmitaFactory) {
    var moduleName = 'gerencia';

    angular
        .module(moduleName, [
            'ngResource'
        ])
        .controller('SideBarController', SideBarController)
        .controller('MarmitaController', MarmitaController)
        .factory('MarmitaFactory', MarmitaFactory);

    return moduleName;

});