(function (define) {
    define([
        'angular',
        'app/RouteManager',
        'app/AuthInterceptor',
        'app/gerencia/Gerencia',

        'bootsrapjs'
    ], function (angular, RouteManager, AuthInterceptor, Gerencia) {
        var appName = 'app.app',
            dependencies = [
                'ui.router',

                Gerencia,
                AuthInterceptor
            ],
            app;

        app = angular.module(appName, dependencies)
            .config(RouteManager);

        angular.bootstrap(document, [appName]);
    });
})(define);
