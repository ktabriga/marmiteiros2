(function () {
    define([
        'ui-router'
    ], function () {
        return ['$stateProvider', RouteManager];
    });

    function RouteManager($stateProvider) {
        $stateProvider
            .state('painel', {
                url: '',
                views: {
                    'header@': {
                        templateUrl: 'app/header'
                    },
                    'content@': {
                        templateUrl: 'gerencia/painel'
                    },
                    'sidebar@painel': {
                        templateUrl: 'gerencia/sidebar'
                    }

                }
            })
            .state('painel.marmita', {
                url: '/marmitas',
                views: {
                    'content@painel': {
                        templateUrl: 'gerencia/marmita'
                    }

                }
            })
            .state('painel.pedido', {
                url: '/pedidos',
                views: {
                    'content@painel': {
                        templateUrl: 'gerencia/pedido'
                    }

                }
            });
    }

})();
